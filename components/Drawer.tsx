import { View } from 'react-native';
import { Text } from '@/components/ui/text';
import { useUserContext } from '@/context/UserContext';

export function Drawer() {
  const { userData, isLoading } = useUserContext();

  return (
    <View>
      <Text>
        {isLoading ? 'Loading...' : userData?.fullName || userData?.email}
      </Text>
      {/* Rest of your drawer content */}
    </View>
  );
} 