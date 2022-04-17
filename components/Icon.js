import { StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Icon(props) {
  return (
    <Feather name={props.name} color={props.color || '#1e78e0'} style={styles.icon} />
  )
}

const styles = StyleSheet.create({
    icon: {
        fontSize:20,
    },
})
