import {t2s_dict, F2H_ASCII_LETTERS, measure_dict, RE_DATE,replace_frac, replaceTemperature, replaceDate, replaceDate2, replaceTime} from "./zh_normalization/testexample.js";
import {replace_time , RE_TIME_RANGE, RE_TIME}from "./zh_normalization/practice.js"
const traditional2Simplified = (text,dict) => {
    console.log(text.split(), '0-0-0')

    return text.split('').map(item => dict[item] || item).join("")
}

export const normalizeSentence = (sentence) => {
    // sentence = traditional2Simplified(sentence,t2s_dict)
    // sentence = traditional2Simplified(sentence,F2H_ASCII_LETTERS)
    // sentence = traditional2Simplified(sentence,measure_dict);  //replace_measure
    // sentence = replaceDate(sentence);  //RE_DATE
    // sentence = replaceDate2(sentence);  //RE_DATE2
    // sentence = replaceTemperature(sentence)  //replace_temperature
    // sentence = sentence.replace(RE_TIME_RANGE, replace_time)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//     sentence = replace_time(sentence);
    sentence = sentence.replace(RE_TIME, replace_time)
    console.log(sentence,'++++++++++')
    // sentence = sentence.replace(RE_FRAC, replace_frac);

    // sentence =  replace_frac(sentence)
    // console.log(sentence,'++++++++++')

    // sentence = traditional2Simplified(sentence,measure_dict)
    // console.log(sentence)
    // # 分数表达式

    // # 百分数表达式
    // sentence = sentence.replace(RE_PERCENTAGE, replace_percentage);
    // sentence = sentence.replace(RE_MOBILE_PHONE, replace_mobile);
    // sentence = sentence.replace(RE_TELEPHONE, replace_phone);
    // sentence = sentence.replace(RE_NATIONAL_UNIFORM_NUMBER, replace_phone);
    // 范围表达
    // sentence = sentence.replace(RE_RANGE, replace_range);
    // # 整数表达式
    // sentence = sentence.replace(RE_INTEGER, replace_negative_num);
    // 数字表达式 纯小数
    // sentence = sentence.replace(RE_DECIMAL_NUM, replace_number);
    // 正整数 + 量词
    // sentence = sentence.replace(RE_POSITIVE_QUANTIFIERS, replace_positive_quantifier);
    // # 编号-无符号整形
    // sentence = sentence.replace(RE_DEFAULT_NUM, replace_default_num);

    // sentence = sentence.replace(RE_NUMBER, replace_number);
    // sentence = this._post_replace(sentence);
    return sentence;
}

export const normalizer = (text) => {
    let sentences = this._split(text);
    sentences = sentences.map((sent) => this.normalize_sentence(sent));
    return sentences;
}