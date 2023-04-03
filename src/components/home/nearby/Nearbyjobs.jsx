import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';


import styles from './nearbyjobs.style';
import { COLORS, SIZES } from '../../../constants';

import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';
import useFetch from '../../../hooks/useFetch';

const Nearbyjobs = () => {
  const router = useRouter();
  const { data, error, loading, refetch } = useFetch(
    'search',
    { query: 'React Native Developer', num_pages: 1 },
  );

  console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {loading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((job)=>(
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={()=>router.push(`/job-details/${job?.job_id}`)}

            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;