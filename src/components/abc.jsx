import { useEffect, useCallback } from "react";
import { useGetPostsQuery, useCreatePostsMutation } from "../store/services/jsonPlaceholderApi";
import { setPosts } from "../store/slices/userSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Abc() {
    const dispatch = useDispatch();
    const { data, isSuccess } = useGetPostsQuery();
    const [createPosts, obj] = useCreatePostsMutation();
    const posts = useSelector(state => state.user.posts);

    const handleCreatePosts = useCallback(async () => {
        try {
            await createPosts({
                title: "Lorem Ipsum",
                body: "Lorem Ipsum",
                userId: 14131342413
            });//sending a random Post object
        }
        catch (err) {
            console.log(err);
        }
    }, [createPosts]);

    useEffect(() => {
        if(isSuccess && data) {
            dispatch(setPosts({
                posts: data
            }));//action, payload dispatched to reducer
        }
    }, [isSuccess, data, dispatch]);

    useEffect(() => {
        handleCreatePosts();//POST request to add a new Post
    }, [handleCreatePosts]);

    useEffect(() => {
        console.log(obj);//status of current request sent via handleCreatePosts
    }, [obj]);

    useEffect(() => {
        console.log(posts);
    }, [posts]);

    return <div>
        Hi
    </div>
}