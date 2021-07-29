import React, {
    Component
} from 'react';
import {
    Button,
    Table
} from 'react-bootstrap';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';
class demo extends Component {
    constructor() {
        super();
        this.myRef1 = React.createRef();
        this.myRef2 = React.createRef();
        this.myRef3 = React.createRef();
        this.state = {
            posts: [],
            userId: "",
            title: "",
            body: "",
        }
    }
    componentDidMount = () => this.getPost();
    getPost = async () => {
        try {
            const {
                data
            } = await axios.get(API_URL);
            //console.log(data);
            this.setState({
                posts: data
            });
        } catch (err) {
            console.log(err);
        }
    }
    handle = async (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        //console.log(this.state)

    }
    submit = async (event) => {
        console.log(event.target);
        event.preventDefault();
        var flag = 0,
            ID,
            index;
        for (var i = 0; i < this.state.posts.length; ++i) {
            if (this.state.posts[i].id == this.myRef1.current.value) {
                flag = 1;
                ID = this.state.posts[i].id;
                index = i;
                break;
            }
        }
        if (flag === 0) {
            const post = {
                userId: this.myRef1.current.value,
                title: this.myRef2.current.value,
                body: this.myRef3.current.value,
            }

            console.log("if")
            try {
                await axios.post(`${API_URL}`, post);
                let posts = [...this.state.posts, post];
                console.log("try");
                this.setState({
                    posts
                });


            } catch (err) {
                console.log(err);
            }
        } else {
            console.log("else")
            const post = {
                userId: this.myRef1.current.value,
                title: this.myRef2.current.value,
                body: this.myRef3.current.value,
            }

            console.log("inside update")
            try {
                await axios.put(`${API_URL}/${ID}`, post);
                //console.log(posts);
                this.state.posts[index].userId = post.userId;
                this.state.posts[index].title = post.title;
                this.state.posts[index].body = post.body;
                const posts = [...this.state.posts];
                this.setState({
                    posts
                });
            } catch (err) {
                console.log(err);
            }
        }
    }
    comments = async (Id) => {
        const {
            data
        } = await axios.get(`${API_URL}/${Id}/comments`)
        let res = [];
        for (var i = 0; i < data.length; ++i) {
            res.push(data[i].postId, data[i].id, data[i].name, data[i].email, data[i].body);
        }
        alert(res);

    }
    view = async (Id) => {
        const {
            data
        } = await axios.get(`${API_URL}/${Id}`);
        console.log(data);
        alert("userId:  " + data.id + "   " + "Title:  " + data.title + "   " + "Body:  " + data.body);
    }
    delete = async (postId) => {
        try {
            await axios.delete(`${API_URL}/${postId}`);
            let posts = [...this.state.posts];
            posts = posts.filter(({
                id
            }) => id !== postId);
            this.setState({
                posts
            });
            // console.log(posts);
            // console.log(postId)
        } catch (err) {
            console.log(err);
        }
    }
    update = async (id, title, body) => {
        this.myRef1.current.value = id;
        this.myRef2.current.value = title;
        this.myRef3.current.value = body;
    }
    render() {
        return ( <
            >
            <
            form onSubmit = {
                this.submit
            } >
            <
            label > userId <
            input ref = {
                this.myRef1
            }
            type = "number"
            value = {
                this.state.userId.value
            }
            name = "userId"
            onChange = {
                this.handle
            }
            /> < /
            label > <
            label > Title <
            input ref = {
                this.myRef2
            }
            type = "text"
            value = {
                this.state.title.value
            }
            name = "title"
            onChange = {
                this.handle
            }
            /> < /
            label > <
            label > Body <
            input ref = {
                this.myRef3
            }
            type = "text"
            value = {
                this.state.body.value
            }
            name = "body"
            onChange = {
                this.handle
            }
            /> < /
            label > <
            input type = "submit"
            value = "Submit" / >
            <
            /form> <
            Table >
            <
            thead >
            <
            th > userId < /th> <
            th > Id < /th> <
            th > Title < /th> <
            th > Body < /th> <
            th > Action < /th> < /
            thead > <
            tbody > {
                this.state.posts.map(({
                    userId,
                    id,
                    title,
                    body
                }) => {
                    return ( <
                        tr key = {
                            id
                        } >
                        <
                        td > {
                            userId
                        } < /td> <
                        td > {
                            id
                        } < /td> <
                        td > {
                            title
                        } < /td> <
                        td > {
                            body
                        } < /td> <
                        td > < Button onClick = {
                            () => this.delete(id)
                        } > Delete < /Button></td >
                        <
                        td > < Button onClick = {
                            () => this.view(id)
                        } > View User < /Button></td >
                        <
                        td > < Button onClick = {
                            () => this.comments(id)
                        } > View Comments < /Button></td >
                        <
                        td > < Button onClick = {
                            () => this.update(id, title, body)
                        } > Update < /Button></td >
                        <
                        /tr>
                    );
                })
            } <
            /tbody> < /
            Table > <
            />
        )
    }
}

export default demo;