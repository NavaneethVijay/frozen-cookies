declare const Cookies: {
    set(key: any, value: any, isJson?: Boolean | undefined, expires?: Number | undefined): boolean;
    get(cookieName: any): any;
};
export default Cookies;
