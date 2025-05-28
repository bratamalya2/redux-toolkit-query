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
            });
        }
        catch (err) {
            console.log(err);
        }
    }, [createPosts]);

    useEffect(() => {
        if(isSuccess && data) {
            dispatch(setPosts({
                posts: data
            }));
        }
    }, [isSuccess, data, dispatch]);

    useEffect(() => {
        handleCreatePosts();
    }, [handleCreatePosts]);

    useEffect(() => {
        console.log(obj);
    }, [obj]);

    useEffect(() => {
        console.log(posts);
    }, [posts]);

    return <div>
        Hi
    </div>
}