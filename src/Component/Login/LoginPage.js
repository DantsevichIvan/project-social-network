import React from 'react'
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {logIn} from "../../redux/auth-reducer";
import {required} from "../FormsControls/validators";
import {Input} from "../FormsControls/FormsControls";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'Login'} validate={[required]} name={'email'} component={Input}/></div>
            <div><Field placeholder={'Password'} validate={[required]} name={'password'} type="password"
                        component={Input}/></div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.logIn(formData.email, formData.password)
    };
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login to ...</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
        { props.error ? <h2>{props.error}</h2>: null}
    </div>

};
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    error: state.auth.error
});
export default connect(mapStateToProps, {logIn})(Login)


