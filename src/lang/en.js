//en
const modulesFiles = import.meta.glob('./modules/*/index_en.js', { eager: true });
const modules = Object.keys(modulesFiles).reduce((modules, modulePath) => {
    const value = modulesFiles[modulePath];
    Object.assign(modules, value.default);
    return modules;
}, {});

export default {
    app: {
        home: "home",
        setting_title: "setting",
    },
    userDropdown: {
        userinfo: "userinfo",
        loginout: "loginout",
    },
    login: {
        login: "login",
        username: "username",
        password: "password",
        usernamePlaceholder: "please enter user name",
        passwordPlaceholder: "Please enter the password",
        loginBtn: "login",
    },
    401: {
        401: "401",
    },
    404: {
        404: "404",
    },
    ...modules,
};
