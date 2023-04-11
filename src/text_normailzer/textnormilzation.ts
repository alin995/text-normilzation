import {t2s_dict, F2H_ASCII_LETTERS, measure_dict, RE_DATE,replace_frac,replace_phone,replace_default_num,replace_positive_quantifier,replace_number,replace_negative_num,replace_range,replace_mobile,replace_percentage, replaceTemperature, replaceDate, replaceDate2, replaceTime} from "./zh_normalization/testexample.js";
import {replace_time , RE_TIME_RANGE,RE_FRAC,RE_PERCENTAGE,RE_MOBILE_PHONE,RE_NUMBER,RE_DEFAULT_NUM,RE_POSITIVE_QUANTIFIERS,RE_TELEPHONE,RE_INTEGER,RE_DECIMAL_NUM,RE_RANGE,RE_NATIONAL_UNIFORM_NUMBER} from "./zh_normalization/practice.js"
export  const traditional2Simplified = (text:string,dict:string[]) => {
    console.log(text.split(), '0-0-0')

    return text.split('').map(item => dict[item] || item).join("")
}

export const normalizeSentence = (sentence) => {
    sentence = traditional2Simplified(sentence,t2s_dict)
    sentence = traditional2Simplified(sentence,F2H_ASCII_LETTERS)
    sentence = traditional2Simplified(sentence,measure_dict);  //replace_measure
    sentence = replaceDate(sentence);  //RE_DATE
    sentence = replaceDate2(sentence);  //RE_DATE2
    sentence = replaceTemperature(sentence)  //replace_temperature
    sentence = sentence.replace(RE_TIME_RANGE, replace_time)
    sentence = sentence.replace(RE_FRAC, replace_frac);
    // # 百分数表达式
    sentence = sentence.replace(RE_PERCENTAGE, replace_percentage);

    sentence = sentence.replace(RE_MOBILE_PHONE, replace_mobile);
    sentence = sentence.replace(RE_TELEPHONE, replace_phone);
    sentence = sentence.replace(RE_NATIONAL_UNIFORM_NUMBER, replace_phone);
    sentence = sentence.replace(RE_INTEGER, replace_negative_num);
    // 范围表达
    sentence = sentence.replace(RE_RANGE, replace_range);
    // # 编号-无符号整形
    sentence = sentence.replace(RE_DEFAULT_NUM, replace_default_num);
    sentence = sentence.replace(RE_NUMBER, replace_number);
    // 数字表达式 纯小数
    sentence = sentence.replace(RE_DECIMAL_NUM, replace_number);
    sentence = replace_time(sentence);
    sentence = sentence.replace(RE_TIME, replace_time) //一半时间
    // 正整数 + 量词
    sentence = sentence.replace(RE_POSITIVE_QUANTIFIERS, replace_positive_quantifier); //没解决
    // sentence = this._post_replace(sentence);
    return sentence;
}

export const normalizer = (text) => {
    let sentences = this._split(text);
    sentences = sentences.map((sent) => this.normalize_sentence(sent));
    return sentences;
}