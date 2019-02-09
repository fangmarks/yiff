// ! Require Modules
const axios = require('axios') // api requests 
const c = require('chalk')  // colorful console
let util = require('../util')
// ! Set Important Variables
let baseUrl = "https://sheri.bot/api/v2";
var exports = [];


exports.setApiKey = function (apiKey) {
    if (apiKey) {
        this.apiKey = apiKey;
    } else {
        util.invalid()
    }
}
exports.getCategories = function () {
    return new Promise((resolve, reject) => {
        if (this.apiKey) {
            axios.get(`${baseUrl}/categories`, { headers: { "Authorization": this.apiKey } })
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                });
        } else {
            axios.get(`${baseUrl}/categories`)
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                });
        }
    })
}

exports.checkApiKey = function (apiKey) {
    return new Promise((resolve, reject) => {
        if (apiKey || this.apiKey) {
            axios.get(`${baseUrl}/authcheck`, { headers: { "Authorization": apiKey || this.apiKey } })
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                });
        } else {
            return reject(c.hex('#ff0000')(`[Yiff Module Error] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'))
        }
    })
}

exports.getKeyUsage = function (apiKey) {
    return new Promise((resolve, reject) => {
        if (apiKey || this.apiKey) {
            axios.get(`${baseUrl}/usage/me`, { headers: { "Authorization": apiKey || this.apiKey } })
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                });
        } else {
            return reject(c.hex('#ff0000')(`[Yiff Module Error] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'))
        }
    })
}

exports.getGlobalUsage = function () {
    return new Promise((resolve, reject) => {
        axios.get(`${baseUrl}/usage/global`)
            .then(function (res) {
                return resolve(res.data)
            })
            .catch(function (err) {
                return reject(err)
            });
    })
}

exports.getMur = function () {
    return new Promise((resolve, reject) => {
        axios.get(`${baseUrl}/mur`)
            .then(function (res) {
                return resolve(res.data)
            })
            .catch(function (err) {
                return reject(err)
            });
    })
}

exports.getYiff = function () {
    return new Promise((resolve, reject) => {
        axios.get(`${baseUrl}/yiff`)
            .then(function (res) {
                return resolve(res.data)
            })
            .catch(function (err) {
                return reject(err)
            });
    })
}

exports.getBan = function () {
    return new Promise((resolve, reject) => {
        if (this.apiKey) {
            axios.get(`${baseUrl}/ban`, { headers: { "Authorization": this.apiKey } })
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                });
        } else {
            return reject(c.hex('#ff0000')(`[Yiff Module Error] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'))
        }
    })
}

exports.getBang = function () {
    return new Promise((resolve, reject) => {
        if (this.apiKey) {
            axios.get(`${baseUrl}/bang`, { headers: { "Authorization": this.apiKey } })
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                });
        } else {
            return reject(c.hex('#ff0000')(`[Yiff Module Error] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'))
        }
    })
}

exports.getBoop = function () {
    return new Promise((resolve, reject) => {
        if (this.apiKey) {
            axios.get(`${baseUrl}/boop`, { headers: { "Authorization": this.apiKey } })
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                });
        } else {
            return reject()
        }
    })
}

exports.getBound = function () {
    return new Promise((resolve, reject) => {
        if (this.apiKey) {
            axios.get(`${baseUrl}/bound`, { headers: { "Authorization": this.apiKey } })
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                });
        } else {
            return reject(c.hex('#ff0000')(`[Yiff Module Error] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'))
        }
    })
}

exports.getBrony = function () {
    return new Promise((resolve, reject) => {
        if (this.apiKey) {
            axios.get(`${baseUrl}/brony`, { headers: { "Authorization": this.apiKey } })
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                });
        } else {
            return reject(c.hex('#ff0000')(`[Yiff Module Error] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'))
        }
    })
}

exports.getBulge = function () {
    return new Promise((resolve, reject) => {
        if (this.apiKey) {
            axios.get(`${baseUrl}/bulge`, { headers: { "Authorization": this.apiKey } })
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                });
        } else {
            return reject(c.hex('#ff0000')(`[Yiff Module Error] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'))
        }
    })
}

exports.getComic = function () {
    return new Promise((resolve, reject) => {
        if (this.apiKey) {
            axios.get(`${baseUrl}/comic`, { headers: { "Authorization": this.apiKey } })
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                });
        } else {
            return reject(c.hex('#ff0000')(`[Yiff Module Error] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'))
        }
    })
}

exports.getCuddle = function (nsfw) {
    return new Promise((resolve, reject) => {
        let isNsfw = ""
        if (nsfw) {
            isNsfw = "n";
        }
        if (this.apiKey) {
            axios.get(`${baseUrl}/${isNsfw}cuddles`, { headers: { "Authorization": this.apiKey } })
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                });
        } else {
            return reject(c.hex('#ff0000')(`[Yiff Module Error] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'))
        }
    })
}

exports.getDicks = function () {
    return new Promise((resolve, reject) => {
        if (nsfw) {
            if (this.apiKey) {
                axios.get(`${baseUrl}/ndp`, { headers: { "Authorization": this.apiKey } })
                    .then(function (res) {
                        return resolve(res.data)
                    })
                    .catch(function (err) {
                        return reject(err)
                    });
            } else {
                return reject(c.hex('#ff0000')(`[Yiff Module Error] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'))
            }
        } else {
            if (this.apiKey) {
                axios.get(`${baseUrl}/dicks`, { headers: { "Authorization": this.apiKey } })
                    .then(function (res) {
                        return resolve(res.data)
                    })
                    .catch(function (err) {
                        return reject(err)
                    });
            } else {
                return reject(c.hex('#ff0000')(`[Yiff Module Error] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'))
            }
        }
    })
}

exports.getFinger = function () {
    return new Promise((resolve, reject) => {
        if (this.apiKey) {
            axios.get(`${baseUrl}/finger`, { headers: { "Authorization": this.apiKey } })
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                });
        } else {
            return reject(c.hex('#ff0000')(`[Yiff Module Error] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'))
        }
    })
}

exports.getFox = function () {
    return new Promise((resolve, reject) => {
        if (this.apiKey) {
            axios.get(`${baseUrl}/fox`, { headers: { "Authorization": this.apiKey } })
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                });
        } else {
            return reject(c.hex('#ff0000')(`[Yiff Module Error] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'))
        }
    })
}

exports.getGay = function () {
    return new Promise((resolve, reject) => {
        if (this.apiKey) {
            axios.get(`${baseUrl}/gay`, { headers: { "Authorization": this.apiKey } })
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                });
        } else {
            return reject(c.hex('#ff0000')(`[Yiff Module Error] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'))
        }
    })
}

exports.getGif = function () {
    return new Promise((resolve, reject) => {
        if (this.apiKey) {
            axios.get(`${baseUrl}/gif`, { headers: { "Authorization": this.apiKey } })
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                });
        } else {
            return reject(c.hex('#ff0000')(`[Yiff Module Error] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'))
        }
    })
}

exports.getGroup = function () {
    return new Promise((resolve, reject) => {
        if (this.apiKey) {
            axios.get(`${baseUrl}/group`, { headers: { "Authorization": this.apiKey } })
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                });
        } else {
            return reject(c.hex('#ff0000')(`[Yiff Module Error] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'))
        }
    })
}

exports.getHerm = function () {
    return new Promise((resolve, reject) => {
        if (this.apiKey) {
            axios.get(`${baseUrl}/herm`, { headers: { "Authorization": this.apiKey } })
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                });
        } else {
            return reject(c.hex('#ff0000')(`[Yiff Module Error] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'))
        }
    })
}

exports.getHold = function (nsfw) {
    return new Promise((resolve, reject) => {
        let isNsfw = ""
        if (nsfw) {
            isNsfw = "n";
        }
        if (this.apiKey) {
            axios.get(`${baseUrl}/${isNsfw}hold`, { headers: { "Authorization": this.apiKey } })
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                });
        } else {
            return reject(c.hex('#ff0000')(`[Yiff Module Error] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'))
        }
    })
}

exports.getHug = function (nsfw) {
    return new Promise((resolve, reject) => {
        let isNsfw = ""
        if (nsfw) {
            isNsfw = "n";
        }
        if (this.apiKey) {
            axios.get(`${baseUrl}/${isNsfw}hug`, { headers: { "Authorization": this.apiKey } })
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                });
        } else {
            return reject(c.hex('#ff0000')(`[Yiff Module Error] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'))
        }
    })
}

exports.getKick = function () {
    return new Promise((resolve, reject) => {
        if (this.apiKey) {
            axios.get(`${baseUrl}/kick`, { headers: { "Authorization": this.apiKey } })
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                });
        } else {
            return reject(c.hex('#ff0000')(`[Yiff Module Error] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'))
        }
    })
}

exports.getKiss = function (nsfw) {
    return new Promise((resolve, reject) => {
        let isNsfw = ""
        if (nsfw) {
            isNsfw = "n";
        }
        if (this.apiKey) {
            axios.get(`${baseUrl}/${isNsfw}kiss`, { headers: { "Authorization": this.apiKey } })
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                });
        } else {
            return reject(c.hex('#ff0000')(`[Yiff Module Error] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'))
        }
    })
}

exports.getLesbian = function () {
    return new Promise((resolve, reject) => {
        if (this.apiKey) {
            axios.get(`${baseUrl}/lesbian`, { headers: { "Authorization": this.apiKey } })
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                });
        } else {
            return reject(c.hex('#ff0000')(`[Yiff Module Error] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'))
        }
    })
}

exports.getNudeBi = function () {
    return new Promise((resolve, reject) => {
        if (this.apiKey) {
            axios.get(`${baseUrl}/nbi`, { headers: { "Authorization": this.apiKey } })
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                });
        } else {
            return reject(c.hex('#ff0000')(`[Yiff Module Error] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'))
        }
    })
}

exports.getNudeFemboys = function () {
    return new Promise((resolve, reject) => {
        if (this.apiKey) {
            axios.get(`${baseUrl}/nfemboys`, { headers: { "Authorization": this.apiKey } })
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                });
        } else {
            return reject(c.hex('#ff0000')(`[Yiff Module Error] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'))
        }
    })
}

exports.getLick = function (nsfw) {
    return new Promise((resolve, reject) => {
        let isNsfw = ""
        if (nsfw) {
            isNsfw = "n";
        }
        if (this.apiKey) {
            axios.get(`${baseUrl}/${isNsfw}lick`, { headers: { "Authorization": this.apiKey } })
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                });
        } else {
            return reject(c.hex('#ff0000')(`[Yiff Module Error] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'))
        }
    })
}

exports.getNature = function () {
    return new Promise((resolve, reject) => {
        if (this.apiKey) {
            axios.get(`${baseUrl}/nature`, { headers: { "Authorization": this.apiKey } })
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                });
        } else {
            return reject(c.hex('#ff0000')(`[Yiff Module Error] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'))
        }
    })
}

exports.getPoke = function (nsfw) {
    return new Promise((resolve, reject) => {
        if (nsfw) {
            if (this.apiKey) {
                axios.get(`${baseUrl}/poke`, { headers: { "Authorization": this.apiKey } })
                    .then(function (res) {
                        return resolve(res.data)
                    })
                    .catch(function (err) {
                        return reject(err)
                    });
            } else {
                return reject(c.hex('#ff0000')(`[Yiff Module Error] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'))
            }
        } else {
            if (this.apiKey) {
                axios.get(`${baseUrl}/pokeporn`, { headers: { "Authorization": this.apiKey } })
                    .then(function (res) {
                        return resolve(res.data)
                    })
                    .catch(function (err) {
                        return reject(err)
                    });
            } else {
                return reject(c.hex('#ff0000')(`[Yiff Module Error] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'))
            }
        }
    })
}

exports.getProposal = function () {
    return new Promise((resolve, reject) => {
        if (this.apiKey) {
            axios.get(`${baseUrl}/proposal`, { headers: { "Authorization": this.apiKey } })
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                });
        } else {
            return reject(c.hex('#ff0000')(`[Yiff Module Error] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'))
        }
    })
}

exports.getPussy = function () {
    return new Promise((resolve, reject) => {
        if (this.apiKey) {
            axios.get(`${baseUrl}/pussy`, { headers: { "Authorization": this.apiKey } })
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                });
        } else {
            return reject(c.hex('#ff0000')(`[Yiff Module Error] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'))
        }
    })
}

exports.getSolo = function () {
    return new Promise((resolve, reject) => {
        if (this.apiKey) {
            axios.get(`${baseUrl}/solo`, { headers: { "Authorization": this.apiKey } })
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                });
        } else {
            return reject(c.hex('#ff0000')(`[Yiff Module Error] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'))
        }
    })
}

exports.getSuck = function () {
    return new Promise((resolve, reject) => {
        if (this.apiKey) {
            axios.get(`${baseUrl}/suck`, { headers: { "Authorization": this.apiKey } })
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                });
        } else {
            return reject(c.hex('#ff0000')(`[Yiff Module Error] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'))
        }
    })
}

exports.getTease = function () {
    return new Promise((resolve, reject) => {
        if (this.apiKey) {
            axios.get(`${baseUrl}/tease`, { headers: { "Authorization": this.apiKey } })
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                });
        } else {
            return reject(c.hex('#ff0000')(`[Yiff Module Error] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'))
        }
    })
}

exports.getTraps = function () {
    return new Promise((resolve, reject) => {
        if (this.apiKey) {
            axios.get(`${baseUrl}/traps`, { headers: { "Authorization": this.apiKey } })
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                });
        } else {
            return reject(c.hex('#ff0000')(`[Yiff Module Error] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'))
        }
    })
}

exports.getWolves = function () {
    return new Promise((resolve, reject) => {
        if (this.apiKey) {
            axios.get(`${baseUrl}/wolves`, { headers: { "Authorization": this.apiKey } })
                .then(function (res) {
                    return resolve(res.data)
                })
                .catch(function (err) {
                    return reject(err)
                });
        } else {
            return reject(c.hex('#ff0000')(`[Yiff Module Error] `) + c.hex('#ff8d28')('The API Key you provided is invalid.'))
        }
    })
}

module.exports = exports;