import RecipeCard from '@components/RecipeCard';
import * as React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

function RenderRecipeCards() {
  const [process] = React.useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'normal',
          fontStyle: 'normal',
        }}
      >
        총 7단계, 난이도 최상
      </Text>
      {process.map(function () {
        return <RecipeCard style={{ marginTop: 19 }} data={{}} />;
      })}
    </View>
  );
}

function RecipeDetail() {
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Image source={require('../../../dummy/test.png')} style={{ width: '100%', height: 263 }} />
        <View
          style={{
            width: '100%',
            height: 263,
            position: 'absolute',
            backgroundColor: 'black',
            opacity: 0.41,
            flexDirection: 'column-reverse',
          }}
        />
        <View
          style={{
            width: '100%',
            height: 263,
            position: 'absolute',
            flexDirection: 'column-reverse',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 10,
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 27,
                fontWeight: 'normal',
                fontStyle: 'normal',
                marginLeft: 18,
              }}
            >
              상추 레시피
            </Text>
            <View style={{ flex: 1 }} />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 23 }}>
              <View style={{ width: 22, height: 22, backgroundColor: 'red' }} />
              <Text
                style={{
                  color: 'white',
                  fontSize: 20,
                  fontWeight: 'normal',
                  fontStyle: 'normal',
                  marginLeft: 3,
                }}
              >
                15분
              </Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView
        style={{}}
        contentContainerStyle={{
          paddingLeft: 18,
          paddingRight: 18,
          paddingBottom: 10,
          paddingTop: 19,
        }}
      >
        <RenderRecipeCards />
      </ScrollView>
    </View>
  );
}

export default RecipeDetail;
