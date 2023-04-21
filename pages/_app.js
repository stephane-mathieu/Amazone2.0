import { Provider } from 'react-redux'
import { store } from '../src/app/store'
import '../src/styles/globals.css'
import { Provider as AuthProvider} from "next-auth/react";
import {React} from "react";

const MyApp = ({ Component, pageProps }) => {
    return (
            <AuthProvider session={pageProps.session}>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </AuthProvider>
    )
}

export default MyApp