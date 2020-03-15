import React from 'react';
import './App.css';

import YT_API from './helpers/yt_helper';

import List from "./components/list";
import Header from "./components/header";

export default class App extends React.Component {
    constructor() {
        super();
        console.log(this.props);
        this.api = new YT_API();
        this.state = {
          channel_ID: null,
          prevPageToken: null,
          nextPageToken: null,
          list: [],
          is_loading: true,
        };
        console.log('constructor: ', this.state);
    }

    get_list = (id) => {

        this.api.get_videos_from_list({ channel_ID: id })
            .then(res => {
                console.log(res);
                const new_state = {
                    channel_ID: id,
                    list: res.items,
                    is_loading: false,
                };
                new_state.prevPageToken = ('prevPageToken' in res) ? res.prevPageToken : null;
                new_state.nextPageToken = ('nextPageToken' in res) ? res.nextPageToken : null;

                this.setState(new_state);
            })
            .catch(e => {
                console.error(JSON.parse(e.message));
                this.setState({
                    prevPageToken: null,
                    nextPageToken: null,
                    channel_ID: id,
                    list: [],
                    is_loading: false,
                });
            });
    };

    componentDidMount() {
        const { channel_ID } = this.props;
        console.log('did mount: ', this.state);
        this.get_list(channel_ID);
    };

    componentDidUpdate(prevProps, prevState) {
        if (!(
                ( prevState.prevPageToken === this.state.prevPageToken )
                && ( prevState.nextPageToken === this.state.nextPageToken )
            )) {
            this.get_list(this.state.channel_ID);
        }
    };

    render() {
        console.log('render: ', this.state);
        const { list } = this.state;
        return (
            <div className="App">
                <Header />
                <List list={ list }/>
            </div>
        );
    };
}
