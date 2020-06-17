import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import * as CryptoJS from 'crypto-js';

export class EncryptService {


  public key = '123456789012345678912314';

  constructor() {

  }

  encryptText(text: string) {
    const re = /\+/g;
    const re2 = /\//g;
    let ret = CryptoJS.DES.encrypt(text, this.key).toString();
    ret = ret.replace(re, '-');
    ret = ret.replace(re2, '_');
    return ret;
  }

  encryptJson(json) {
    const re = /\+/g;
    const re2 = /\//g;
    let ret = CryptoJS.DES.encrypt(JSON.stringify(json), this.key).toString();
    ret = ret.replace(re, '-');
    ret = ret.replace(re2, '_');
    return ret;
  }

  decryptText(text: string) {
    const re = /\-/g;
    const re2 = /\_/g;
    let ret = CryptoJS.DES.decrypt(text, this.key).toString(CryptoJS.enc.Utf8);
    ret = ret.replace(re, '+');
    ret = ret.replace(re2, '/');
    return ret;
  }

  decryptJson(json) {
    const re = /\-/g;
    const re2 = /\_/g;
    json = json.replace(re, '+');
    json = json.replace(re2, '/');
    const text = CryptoJS.DES.decrypt(json, this.key).toString(CryptoJS.enc.Utf8);
    return JSON.parse(text);
  }

}
