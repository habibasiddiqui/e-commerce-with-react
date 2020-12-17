import React, { useState, useEffect } from 'react'
import fire from '../config/Fire';
import Login from '../pages/Login';
import Welcome from '../pages/Welcome';

function FirebaseLog() {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPwd, setErrorPwd] = useState("");
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs=()=>{
        setEmail("");
        setPassword("");
      }

    const clearErrors=()=>{
        setErrorEmail("");
        setErrorPwd("");
      }

    const handleSignUp = () => {
        clearErrors();
        fire.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => {
                switch (error.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setErrorEmail(error.message);
                        break;
                    case "auth/weak-password":
                        setErrorPwd(error.message);
                        break;
                }
            }
            )
    }

    const handleSignIn = () => {
        clearErrors();
        fire.auth().signInWithEmailAndPassword(email, password)
            .catch((error) => {
                switch (error.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setErrorEmail(error.message);
                        break;
                    case "auth/wrong-password":
                        setErrorPwd(error.message);
                        break;
                }
            });
    }


    const handleSignOut = () => {
        fire.auth().signOut();
    }

    const authListner = () => {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                clearInputs();
                setUser(user);
            } else {
                setUser("");
            }
        })
    };

    useEffect(() => {
        authListner();
    }, [])


    return (
        <div>
            {user ? (
                <Welcome handleSignOut={handleSignOut} />
            ) : (
                    <div>
                        <Login email={email}
                            password={password}
                            setEmail={setEmail}
                            setPassword={setPassword}
                            hasAccount={hasAccount}
                            setHasAccount={setHasAccount}
                            errorEmail={errorEmail}
                            errorPwd={errorPwd}
                            handleSignIn={handleSignIn}
                            handleSignUp={handleSignUp} />

                    </div>
                )
            }
        </div>

    )
}

export default FirebaseLog
