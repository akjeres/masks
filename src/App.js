import React from 'react';
import './App.css';

import YT_API from './helpers/yt_helper';

import Header from "./components/header";
import List from "./components/list";
import Pagination from "./components/pagination";

export default class App extends React.Component {
    constructor() {
        super();
        console.log(this.props);
        this.api = new YT_API();
        this.state = {
          channel_ID: null,
          prevPageToken: null,
          nextPageToken: null,
          pageToken: null,
          page: 1,
          list: [],
          is_loading: true,
        };
        console.log('constructor: ', this.state);
    }

    get_list = (id, pageToken = null) => {
        console.log('id: ', id, '\n', 'pageToken: ', pageToken);
        this.api.get_videos_from_list({
            channel_ID: id,
            pageToken: pageToken,
        })
            .then(res => {
                console.log(res);
                const new_state = {
                    channel_ID: id,
                    list: res.items,
                    is_loading: false,
                    pageToken: pageToken,
                };
                new_state.prevPageToken = ('prevPageToken' in res) ? res.prevPageToken : null;
                new_state.nextPageToken = ('nextPageToken' in res) ? res.nextPageToken : null;

                this.setState(new_state);
            })
            .catch(e => {
                console.error(JSON.parse(e.message));
                this.setState({
                    list: [],
                });
            });
    };

    increasePage = () => {
        const { page, nextPageToken } = this.state;
        const newPage = nextPageToken ? page + 1 : page;
        this.setState({
            page: newPage,
            pageToken: nextPageToken,
        });
        console.log('increasePage');
    };

    decreasePage = () => {
        const { page, prevPageToken } = this.state;
        const newPage = prevPageToken ? page - 1 : 1;
        this.setState({
            page: newPage,
            pageToken: prevPageToken,
        });
        console.log('decreasePage');
    };

    componentDidMount() {
        const { channel_ID, pageToken } = this.props;
        console.log('did mount: ', this.state);
        this.get_list(channel_ID, pageToken);
    };

    componentDidUpdate(prevProps, prevState) {
        const { channel_ID, pageToken } = this.state;
        if (!(
                ( prevState.prevPageToken === this.state.prevPageToken )
                && ( prevState.nextPageToken === this.state.nextPageToken )
                && ( prevState.pageToken === this.state.pageToken )
                && ( prevState.page === this.state.page )
            )) {
            this.get_list(channel_ID, pageToken);
        }
    };

    render() {
        console.log('render: ', this.state);
        const {
            list,
            page,
            pageToken,
            prevPageToken,
            nextPageToken,
        } = this.state;
        return (
            <div className="App">
                <Header />
                <List list={ list }/>
                <Pagination
                    increasePage = { this.increasePage }
                    decreasePage = { this.decreasePage }
                    page={ page }
                    pageToken={ pageToken }
                    prev_page={ prevPageToken }
                    next_page={ nextPageToken }
                />
            </div>
        );
    };
}
