PJ=package.json
TS=text-normilzation.ts
JS=text-normilzation.js
ES5=text-normilzation.es5.js
ES6=text-normilzation.es6.js
MJS=text-normilzation.mjs
DTS=text-normilzation.d.ts

all: $(MJS) $(JS)

$(MJS): $(PJ) $(TS)
	tsc -d --target es6 $(TS) && mv $(JS) $(MJS)

$(ES6): $(MJS)
	util/makecjs $(MJS) > $(ES6)

$(ES5): $(ES6)
	tsc --allowJS --outFile $(ES5) $(ES6)

$(JS): $(ES5)
	rm $(ES6) && mv $(ES5) $(JS)

test: $(PJ) $(MJS) $(JS)
	mocha

clean:
	-rm $(DTS) $(MJS) $(JS) $(ES5) $(ES6)
