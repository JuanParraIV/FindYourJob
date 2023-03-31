import { View } from 'react-native';
import { Link, Stack } from "expo-router";

const Home = () => {
  return (
    <View className='flex-1 items-center justify-center'>
      {/* Use the `Screen` component to configure the layout. */}
      <Stack.Screen options={{ title: "Overview" }} />
      {/* Use the `Link` component to enable optimized client-side routing. */}
      <Link href="/details">Go to Details</Link>
    </View>
  );
};

export default Home;