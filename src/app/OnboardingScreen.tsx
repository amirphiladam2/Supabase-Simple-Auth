import { Text, View, StyleSheet,Button } from "react-native";
import { useRouter } from "expo-router";
export default function Index() {
  const router=useRouter();
  return (
    <View style={styles.container}>
      <Button 
        title="Get Started"
        onPress={()=>router.push('/AuthScreen')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
