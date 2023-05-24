import React, {createContext, useEffect, useState} from "react"
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const CustomContext = createContext();


export const Context = (props) => {

    const navigate = useNavigate();
    const [burger, setBurger] = useState(false);
    const [openJob, setOpenJob] = useState(false);
    const [tab, setTab] = useState(1);
    const [order, setOrder] = useState(false);
    const [historyQuery, setHistoryQuery] = useState([])
    const toggleTab = (index) => {
        setTab(index)
    };

    const [user, setUser] = useState({
        login: ''
    });

    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            setUser(JSON.parse(localStorage.getItem('user')))
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    const registerUser = (data) => {
//        axios.post('http://0.0.0.0:8000/post/registrations/', {...data, orders: []})
        axios.post('http://reise.kg/api/post/registrations/', data)
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res.data));
                setUser(data);
                navigate('/')
            })
    };

    const loginAdmin = (data) => {
    console.log(data)
        axios.post('https://reise.kg/api/post/login/', data)
            .then((res) => {
            console.log(res)
                axios.get("https://reise.kg/api/post/profile/", {
        headers:{
        "Authorization" : `Bearer ${res.data.access}`}
        }).then(resolve => {
                localStorage.setItem('user', JSON.stringify({...res.data, ...resolve.data }));
                setUser({...res.data, ...resolve.data });
                navigate('/')
        })
       })
    };

    const logOutAdmin = () => {
        if (window.confirm('ты точно хочешь выйти?')) {
            localStorage.removeItem('user');
            setUser({
                login: ''
            })
        } else {
            return ''
        }

    };
    const getHistoryQuery = () => {
        axios.get("https://reise.kg/api/post/questions/", {
        headers:{
        "Authorization" : `Bearer ${user.access}`}
        }).then(res => {
            setHistoryQuery(res.data)
        })
    }

    const value = {
        user,
        setUser,
        burger,
        setBurger,
        tab,
        setTab,
        order,
        setOrder,
        openJob,
        setOpenJob,
        registerUser,
        logOutAdmin,
        loginAdmin,
        toggleTab,
        getHistoryQuery,
        historyQuery,
        setHistoryQuery
    };



    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
};
