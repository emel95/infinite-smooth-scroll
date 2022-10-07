# infinite-smooth-scroll

 An **infinite smooth scroll** that rotates infinitely on a limited data.

# Install

```
yarn add Infinite-smooth-scroll

or

npm i Infinite-smooth-scroll
```

## Note : Attention, when using this component, we must give it the parent component of flex: 1 .



# Usage
```
import { InfiniteSmooth } from 'infinite-smooth-scroll';
import {  Dimensions } from 'react-native';
dataBrand = [
    { id: '1', title: 'APPLE' },
    { id: '2', title: 'SONY' },
    { id: '3', title: 'HUAWEI' },
    { id: '4', title: 'NOKIA' },
    { id: '5', title: 'DELL' },
    { id: '6', title: 'SAMSUNG' },
];
const SCREEN_WIDTH = Dimensions.get('window').width;

function App(){
  return (
    <View style={{ flex: 1 ,marginTop: 30}}>
      <InfiniteSmooth 
        data={dataBrand} 
        isRight={false} 
        countItemInScreen={5}
        marginHorizontalItems={10}
        UiItem={({ item, index }) =>
           (<View style={{
              marginHorizontal: 5,
              borderWidth: 2,
              borderColor: 'grey',
              borderRadius: 15,
              width: SCREEN_WIDTH / 3.5,
              height: SCREEN_WIDTH / 3.5,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#fff',
           }}>
                <Text>{item.title}</Text>
            </View>
            )} 
        />
    </View>
  );

}
```
| prop| typeProp | default | description  |
| -------- | -------- | ----------- | ---- |
|data|Array of objects|The field is mandatory|The data that displays in smooth scroll|
|isRight|boolean|true|If we want the smooth scroll to move from the right side, we set isRight=false|
|time|number|100|This number is in milliseconds|
|countItemInScreen|number|The field is mandatory|The number of items on the page|
|UiItem|A component whose return value is JSX.Element|The field is mandatory|Ui every item in Smooth Scroll  as a component to this prop. for example `UiItem={({ item, index }) =>(<View style={styles.card}><Text>{item.title}</Text> </View>)} />`|
|speadMove|number|40|The speed of movement is our smooth scroll|
|marginHorizontalItems|number|The field is mandatory|The distance between items in smooth scroll, which is the marginHorizontal |



# Author

**Emel Mousavi**

- LinkedIn : [ Emel Mousavi ]()
- Github : [@emel95](https://github.com/emel95)


# Contributing

Contributions, issues and feature requests are welcome!

# Show your support

Give a ⭐️ if this project helped you!
