import { View } from "react-native"

// functional component with props
const Separator = (props) => {
    return <View style={{ height: props.height }}></View>;
}

export default Separator;