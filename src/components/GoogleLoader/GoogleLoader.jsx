import React, { useEffect, useState } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selector";
import operations from "../../redux/auth/auth-operations";
import authSlice from "../../redux/auth/auth-slice";
import { Container } from "../Container";

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const GoogleLoader = () => {
    const query = useQuery();
    const dispatch = useDispatch();
    const storedToken = useSelector(authSelectors.getToken);
    const [token, setToken] = useState(null);
    const history = Navigate();

    useEffect(() => {
        setToken(query.get('token'));
    }, [query]);

    useEffect(() => {
        dispatch(authSlice(token));
    }, [dispatch, token]);

    useEffect(() => {
        if (storedToken) {
            dispatch(operations.getCurrentUser());
        }
    }, [dispatch, history, storedToken]);

    return (
        <>
            <Container>
                <p>Loading...</p>
            </Container>
        </>
    );
};

export default GoogleLoader;