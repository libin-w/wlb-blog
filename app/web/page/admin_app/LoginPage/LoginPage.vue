<template>
    <div class="login-page-container">
        <div class="login-page">
            <h1>王立斌</h1>
            <p class="error-text">{{errorText}}</p>
            <div class="form-container">
                <div class="username">
                    <input type="text" v-model="username" @keyup.enter="getFocus('passwordIpt')" ref="usernameIpt" placeholder="username">
                    <i v-show="username" @click="clearUsername" class="el-icon-circle-close clear-username"></i>
                </div>
                <div class="line-between"></div>
                <div class="password">
                    <input type="password" v-model="password" @keyup.enter="submitForm" ref="passwordIpt" placeholder="password">
                </div>
                <div class="submit-container">
                    <span @click="submitForm"></span>
                </div>
            </div>
            <div class="remember-me">
                <el-checkbox v-model="remember" @keyup.enter.native="submitForm" class="remember-checkbox">在这台电脑上记住我</el-checkbox>
            </div>
        </div>

    </div>
</template>
<script type="text/babel">
import { login } from '../../../http/admin_http/fetch';
export default {
    name: 'LoginPage',
    data() {
        return {
            errorText: '',
            username: 'qfes',
            password: 'fews',
            remember: false
        };
    },
    methods: {
        getFocus(ipt) {
            console.log(ipt);
            this.$refs[ipt].focus();
        },
        clearUsername() {
            this.username = '';
            this.password = '';
            this.getFocus('usernameIpt');
        },
        submitForm() {
            const self = this;
            if (self.username) {
                self.errorText = '';
            } else {
                self.errorText = '请输入用户名';
                return;
            }
            if (self.password) {
                self.errorText = '';
            } else {
                self.errorText = '请输入密码';
                return;
            }
            const data = {
                username: self.username,
                password: self.password,
                remember: self.remember
            };
            login(data).then(response => {
                console.log(response);
                this.$router.push('/handle');
            }).catch(error => {
                console.log(error);
            });


        }
    },
    mounted() {
        console.log(this.$refs);
        this.getFocus('usernameIpt');
    }
};

</script>
<style lang="less" scoped>
@BgColor: #3d495c;
@FormBgColor: #2a303e;
.login-page-container {
    width: 100%;
    height: 100%;
    min-height: 600px;
    background-color: @BgColor;
    display: flex;
    align-items: center;
    & > .login-page {
        margin: 0px auto;
        & > h1 {
            text-indent: -9999px;
            margin: 0px;
            height: 60px;
            background: url('../../../asset/images/welcome_img.png') no-repeat center center;
            background-size: 200px 60px;
        }
        & > .error-text {
            font-size: 14px;
            height: 20px;
            line-height: 20px;
            color: #fc4343;
        }
        .form-container {
            width: 330px;
            padding: 5px 0px 5px 20px;
            box-sizing: border-box;
            background-color: @FormBgColor;
            position: relative;
            border-radius: 5px;
            & > .username,
            & > .password {
                width: 100%;
                height: 44px;
                padding-right: 60px;
                box-sizing: border-box;
                & > input {
                    width: 100%;
                    height: 100%;
                    border: 0px none;
                    padding: 0px;
                    outline: 0px none;
                    background-color: transparent;
                    color: #19a5fc;
                    &::-webkit-input-placeholder {
                        color: @BgColor;
                    }
                    &:-moz-placeholder {
                        color: @BgColor;
                    }
                    &::-moz-placeholder {
                        color: @BgColor;
                    }
                    &:-ms-input-placeholder {
                        color: @BgColor;
                    }
                }
            }
            & > .username {
                position: relative;
                & > .clear-username {
                    position: absolute;
                    right: 30px;
                    top: 9px;
                    font-size: 26px;
                    cursor: pointer;
                    color: #c0c4cc;
                    opacity: 0.4;
                    &:hover {
                        opacity: 0.7;
                    }
                }
            }
            & > .line-between {
                width: 100%;
                height: 2px;
                background-color: @BgColor;
            }

            & > .submit-container {
                position: absolute;
                right: -30px;
                top: 20px;
                background-color: @BgColor;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                & > span {
                    display: block;
                    cursor: pointer;
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    background-color: @FormBgColor;
                    position: absolute;
                    left: 6px;
                    top: 6px;
                    &::before {
                        content: '';
                        position: absolute;
                        border: 10px solid transparent;
                        border-left-color: @BgColor;
                        display: block;
                        width: 0px;
                        height: 0px;
                        left: 19px;
                        top: 14px;
                    }
                }
            }
        }
        & > .remember-me {
            height: 30px;
            line-height: 30px;
            text-align: right;
        }
    }
}
</style>
<style lang="less">
.login-page-container {
    & > .login-page {
        & > .remember-me {
            & > .remember-checkbox {
                & > .el-checkbox__input.is-checked {
                    & > .el-checkbox__inner {
                        background-color: #19a5fc;
                        border-color: #19a5fc;
                    }
                }
                & > .el-checkbox__label {
                    color: #999999;
                }
            }
        }
    }
}
</style>



