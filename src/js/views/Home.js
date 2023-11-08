import React, {useEffect} from 'react';
import JoinedChatsList from '../components/JoinedChatsList';
import AvailableChatsList from '../components/AvailableChatsList';
import ViewTitle from '../components/shared/ViewTitle';
import { fetchChats } from '../api/chats';
// import { useDispatch, useSelector } from 'react-redux'
// import {fetchChats} from '../api/chatsSlice';

const Home = () => {
    // const dispatch = useDispatch()
    useEffect(() => {
        fetchChats();
        // dispatch(fetchChats());
    }, []);
    // const contents = useSelector((state) => state.chats.chats);
    // console.log('Chats ==>>', contents);
    return (
        <div className="row no-gutters fh">
            <div className="col-3 fh">
                <JoinedChatsList />
            </div>
            <div className="col-9 fh">
                <ViewTitle text="Choose your channel"/>
                <div className="container-fluid">
                    <AvailableChatsList />
                </div>
            </div>
        </div>
    )
}

export default Home;