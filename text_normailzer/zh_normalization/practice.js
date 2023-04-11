// import {verbalizeCardinal} from './testexample.js'
// import {re} from "@babel/core/lib/vendor/import-meta-resolve.js";

export const DIGITS = '零一二三四五六七八九'.split("")
export const UNITS = {
    1: '十',
    2: '百',
    3: '千',
    4: '万',
    8: '亿',
}
// 时刻表达式
// export const RE_TIME = /([0-1]?[0-9]|2[0-3]):([0-5][0-9])(:([0-5][0-9]))?/g

// export const RE_FRAC = /([0-1]?[0-9]|2[0-3]):([0-5][0-9])(:([0-5][0-9]))?/g

export const RE_FRAC = /(-?)(\d+)\/(\d+)/;

export const RE_PERCENTAGE = /(-?)(\d+(\.\d+)?)%/;

export const RE_MOBILE_PHONE = (/(?<!\d)((\+?86 ?)?1([38]\d|5[0-35-9]|7[678]|9[89])\d{8})(?!\d)/);

export const RE_TELEPHONE = (/(?<!\d)((0(10|2[1-3]|[3-9]\d{2})-?)?[1-9]\d{7,8})(?!\d)/);

export const RE_NATIONAL_UNIFORM_NUMBER = (/(400)(-)?\d{3}(-)?\d{4}/);

export const RE_RANGE = /((-?)((\d+)(\.\d+)?)|(\.(\d+)))[-~]((-?)((\d+)(\.\d+)?)|(\.(\d+)))/;

export const RE_DECIMAL_NUM = /(-?)((\d+)(\.\d+))|(\.(\d+))/;



const COM_QUANTIFIERS =
    '(封|艘|把|目|套|段|人|所|朵|匹|张|座|回|场|尾|条|个|首|阙|阵|网|炮|顶|丘|棵|只|支|袭|辆|挑|担|颗|壳|窠|曲|墙|群|腔|砣|座|客|贯|扎|捆|刀|令|打|手|罗|坡|山' +
    '|岭|江|溪|钟|队|单|双|对|出|口|头|脚|板|跳|枝|件|贴|针|线|管|名|位|身|堂|课|本|页|家|户|层|丝|毫|厘|分|钱|两|斤|担|铢|石|钧|锱|忽|(千|毫|微)克|毫|厘|(公)分|分|寸|尺|丈|里' +
    '|寻|常|铺|程|(千|分|厘|毫|微)米|米|撮|勺|合|升|斗|石|盘|碗|碟|叠|桶|笼|盆|盒|杯|钟|斛|锅|簋|篮|盘|桶|罐|瓶|壶|卮|盏|箩|箱|煲|啖|袋|钵|年|月|日|季|刻|时|周|天|秒|分|小时|旬' +
    '|纪|岁|世|更|夜|春|夏|秋|冬|代|伏|辈|丸|泡|粒|颗|幢|堆|条|根|支|道|面|片|张|颗|块|元' +
    '|(亿|千万|百万|万|千|百)|(亿|千万|百万|万|千|百|美|)元|(亿|千万|百万|万|千|百|十|)吨|(亿|千万|百万|万|千|百|)块|角|毛|分)'
// export const COM_QUANTIFIERS = "(封|艘|把|目|套|段|人|所|朵|匹|张|座|回|场|尾|条|个|首|阙|阵|网|炮|顶|丘|棵|只|支|袭|辆|挑|担|颗|壳|窠|曲|墙|群|腔|砣|座|客|贯|扎|捆|刀|令|打|手|罗|坡|山|岭|江|溪|钟|队|单|双|对|出|口|头|脚|板|跳|枝|件|贴|针|线|管|名|位|身|堂|课|本|页|家|户|层|丝|毫|厘|分|钱|两|斤|担|铢|石|钧|锱|忽|(千|毫|微)克|毫|厘|(公)分|分|寸|尺|丈|里|寻|常|铺|程|(千|分|厘|毫|微)米|米|撮|勺|合|升|斗|石|盘|碗|碟|叠|桶|笼|盆|盒|杯|钟|斛|锅|簋|篮|盘|桶|罐|瓶|壶|卮|盏|箩|箱|煲|啖|袋|钵|年|月|日|季|刻|时|周|天|秒|分|小时|旬|纪|岁|世|更|夜|春|夏|秋|冬|代|伏|辈|丸|泡|粒|颗|幢|堆|条|根|支|道|面|片|张|颗|块|元|(亿|千万|百万|万|千|百)|(亿|千万|百万|万|千|百|美|)元|(亿|千万|百万|万|千|百|十|)吨|(亿|千万|百万|万|千|百|)块|角|毛|分)";
// export const RE_POSITIVE_QUANTIFIERS =/\d+([多余几\+])?/  + COM_QUANTIFIERS;

// export const RE_POSITIVE_QUANTIFIERS =  `\d+([多余几\+])?${COM_QUANTIFIERS}`
// export const RE_POSITIVE_QUANTIFIERS_test ="(\\d+)([多余几\\+])?";
// export const RE_POSITIVE_QUANTIFIERS_test ="(\\d+)([多余几\\+])?";
// export const RE_POSITIVE_QUANTIFIERS =/\d+(\.\d+)?/;
export const RE_POSITIVE_QUANTIFIERS =/\d+/;
// export const RE_POSITIVE_QUANTIFIERS =new RegExp( RE_POSITIVE_QUANTIFIERS_test + COM_QUANTIFIERS)

export const RE_DEFAULT_NUM = /\d{3}\d*/;

export const RE_NUMBER = /(-?)((\d+)(\.\d+)?)|(\.(\d+))/;
export const RE_INTEGER = /(-)(\d+)/;
// export const RE_TIME = /([0-1]?[0-9]|2[0-3]):([0-5][0-9])(:([0-5][0-9]))?/
// 时间范围，如8:30-12:30

// export const RE_TIME_RANGE = /^([01]?[0-9]|2[0-3]):([0-5][0-9])(:([0-5][0-9]))?([~-])([01]?[0-9]|2[0-3]):([0-5][0-9])(:([0-5][0-9]))?$/;

export const RE_TIME_RANGE = /([0-1]?[0-9]|2[0-3]):([0-5][0-9])(:([0-5][0-9]))?([~-])([0-1]?[0-9]|2[0-3]):([0-5][0-9])(:([0-5][0-9]))?/

const sentence = "时间范围，如8:30:01-12:30"
const sentence2 = "时间范围，如8:29:02-12:30"
export const num2str = (n) => {
    console.log(n,'nnnnnnnnnnnn')
    const integer_decimal = n.split('.');
    const integer = integer_decimal[0];
    const decimal = integer_decimal[1] || '';
    console.log(integer,'⬇️⬇️⬇️⬇️⬇️⬇️⬇️')
    console.log(decimal,'⬇️⬇️⬇️⬇️⬇️⬇️⬇️')
    // return Array.from(integer).map(integers => verbalize_cardinal(integers)) + verbalize_digit(decimal);
    return  verbalize_cardinal(integer.toString()) + verbalize_digit(decimal);
}

export const _time_num2str = (n) => {
    // 去除数字字符串中的零头
    // n = n.replace(/\d+/g, '');
// 如果数字字符串以零开头，则在末尾添加数字字符串的千分位符号
    if (n.charAt(0) === '0') {
        n = '0' + n;
    }
// 使用 Date.prototype.toLocaleString() 方法生成格式化的时间字符串
    console.log(`_time_num2str:${n}`)
    console.log(n)

    let test = verbalizeCardinal(n)
    console.log(test)
    return test.toLocaleString().replace(/[:digit:]]/g, '');

}
export const replace_time = (_, ...args) => {
    const is_range = args.length > 5
    console.log(args.length,'--------------')
    console.log(args)
    console.log(_)
    const normalize = ([hour, minute, _, second]) => {
        console.log(minute,'🚼')
        // let result = `${num2str(hour)}点`
        let result = num2str(hour) + '点'

        if (minute.trimStart()) {
            if (parseInt(minute) === 30) {
                result += "半"
            } else {
                // result += `${_time_num2str(minute)}分`
                result += _time_num2str(minute)+'分'
                console.log(result,'minuteresult')
            }
        }

        if (second && second.trimStart()) {
            result += `${_time_num2str(second)}秒`
        }
        return result
    }

    let result = normalize(args)
    // console.log(result)

    if (is_range) {
        result += "至"
        result += normalize(args.slice(5, 8))
    }

    return result
}


export const verbalize_cardinal = (value_string)  => {
    console.log(value_string,'⬅️⬅️⬅️⬅️⬅️')
    const value_string01 = value_string.replace(/\d+/g, '');
    // const result_symbols = Array.from(value_string01).map(digit => {
    //     return DIGITS[digit] || '零';
    // });
    const result_symbols = DIGITS[value_string] || '零';

    console.log(result_symbols,'result_symbols')
    // return result_symbols.join('');
    return result_symbols;
}

    // ,bool alt_one= False
export const verbalize_digit = (value_string) => {
    const value_string02 = value_string.replace(/\d+/g, '');
    const result_symbols = Array.from(value_string02).map(digit => {
        return DIGITS[digit] || '零';
    });
    return result_symbols.join('');
}

export const verbalize_digit_phone = (value_string, alt_one = false) => {
    console.log(value_string)
    console.log(alt_one)
    const result_symbols = Array.from(value_string).map(digit => DIGITS[digit]);
    let result = result_symbols.join('');
    if (alt_one) {
        result = result.replace(/一/g, '幺');
    }
    return result;
}

export const phone2str = (phone_string, mobile=true) => {
    if (mobile) {
        let sp_parts = phone_string.trim().split("+").join("").split(" ");
        let result = sp_parts.map(part => verbalize_digit_phone(part, true)).join("，");
        return result;
    } else {
        console.log(phone_string)
        console.log(mobile)
        let sil_parts = phone_string.split("-");
        let result = sil_parts.map(part => verbalize_digit_phone(part, true)).join("，");
        console.log(result)
        return result;
    }
}

export const verbalizeCardinal = (valueString) => {
    if (!valueString) {
        return '';
    }

    // 000 -> '零' , 0 -> '零'
    valueString = valueString.replace(/^0+/, '');
    if (valueString.length === 0) {
        return DIGITS['0'];
    }

    const resultSymbols = _getValue(valueString);
    // verbalized number starting with '一十*' is abbreviated as `十*`
    if (resultSymbols.length >= 2 && resultSymbols[0] === DIGITS['1'] && resultSymbols[1] === UNITS[1]) {
        resultSymbols.splice(0, 1);
    }
    return resultSymbols.join('');
};



// const result = sentence.replace(RE_TIME_RANGE, replace_time)
// console.log(result)
