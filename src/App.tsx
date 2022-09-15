import './App.css'
import { useAppDispatch, useAppSelector } from './app/hooks';
import { useFetchPostsQuery } from './features/posts/posts-api-slice';

function App() {
  const isUserIdReceived = useAppSelector(state => state.user.value?.id);
  const dispatch = useAppDispatch();

  const { data, isFetching } = useFetchPostsQuery('2');
  // dispatch(loggedIn(Boolean(accessToken)));

  return (
    <div className="image-container">
    {!isFetching && data?.map((post, index) => (
      <img key={post.userName + index} src={post.imageUrl} alt={post.description} height={400}/>
    ))}
    </div>
  )
}

export default App;
