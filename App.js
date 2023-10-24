import { useRef, useState } from "react"
import { DrawerLayoutAndroid, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Button, Header, Separator } from "./components";
import {
  LotsOfStyles,
  FixedDimensionsBasics,
  FlexDimensionsBasics,
  PercentageDimensionsBasics,
  FlexBasic,
  FlexDirectionBasics,
  JustifyContentBasics,
  AlignItemsLayout,
  WidthHeightBasics,
  PositionLayout,
  DisplayAnImageWithStyle,
  NativeBaseBasic,
  GlueStackUIBasic,
} from "./screens";

const App = () => {
  // state declaration
  const [page, setPage] = useState("Lots Of Styles");
  // ref declaration
  const drawer = useRef(null);
  // array of object declaration
  const pageArr = [
    { name: "Lots Of Styles", comp: <LotsOfStyles /> },
    { name: "Fixed Dimension Basics", comp: <FixedDimensionsBasics /> },
    { name: "Flex Dimension Basics", comp: <FlexDimensionsBasics /> },
    { name: "Percentage Dimensions Basics", comp: <PercentageDimensionsBasics /> },
    { name: "Flex Basic", comp: <FlexBasic /> },
    { name: "Flex Direction Basics", comp: <FlexDirectionBasics /> },
    { name: "Align Items Layout", comp: <AlignItemsLayout /> },
    { name: "Justify Content Basics", comp: <JustifyContentBasics /> },
    { name: "Width Height Basics", comp: <WidthHeightBasics /> },
    { name: "Position Layout", comp: <PositionLayout /> },
    { name: "Display An Image With Style", comp: <DisplayAnImageWithStyle /> },
    { name: "Native Base Basic", comp: <NativeBaseBasic /> },
    { name: "Glue Stack UI Basic", comp: <GlueStackUIBasic /> },
  ];
  // ref declaration
  const content = useRef(pageArr[0]);

  // find in array of object
  content.current = pageArr.find((item) => item.name == page);

  // arrow function inside functional component
  const changePage = (drawer, pageName) => {
    // close drawer
    drawer.current.closeDrawer();
    // change state value
    setPage(pageName);
  };

  // arrow function inside functional component
  const navigationView = () => {
    return (
      <ScrollView style={styles.drawer}>
      <Text style={styles.textMenus}>MENUS:</Text>
      {/* {looping with map()} */}
      {pageArr.map((item, index) => {
        return (
          <View key={index}>
            <Button 
              text={item.name}
              onPress={() => changePage(drawer, item.name)}
            />
            <Separator height={10} />
          </View>
        );
      })}
      <Button text="Close" onPress={() => drawer.current.closeDrawer()} />
      <Separator height={30} />
    </ScrollView>
    );
  };

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={navigationView}
    >
      <StatusBar styles="light" backgroundColor="#AA0002" />
      <View style={{ flex:1 }}>
        <Header drawer={drawer} />
        {content.current.comp}
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  drawer: { padding: 10, backgroundColor: "#222222", flex: 1, },
  textMenus: {
    color: "white",
    fontSize: 12,
    marginBottom: 10,
    fontWeight: "900"
  },
});

export default App;