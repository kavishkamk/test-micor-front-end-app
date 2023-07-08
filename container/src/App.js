import React, {lazy, Suspense} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

const AuthLazy = lazy(() => import("./components/AuthApp"));
const MarketingLazy = lazy(() => import("./components/MarketingApp"));
import Header from "./components/Header";

const generateClassName = createGenerateClassName({
    productionPrefix: "co",
});

export default () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}> 
                <Header/>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path="/auth" component={AuthLazy} />
                        <Route path="/" component={MarketingLazy} />
                    </Switch>
                </Suspense>
            </StylesProvider>
        </BrowserRouter>
    );
}