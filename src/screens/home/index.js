import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, SafeAreaView } from 'react-native';
import Header from '../../components/header';
import RenderFollowing from "../../components/renderFollowing";
import RenderForyou from "../../components/renderForyou";
import styles from './style';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [followingState, setFollowingState] = useState([]);
  const [foryouState, setForyouState] = useState([]);
  const [followingOrForyou, setFollowingOrForyou] = useState(true);

  useEffect(() => {
    if (followingOrForyou) {
      const fetchData = async () => {
        try {
          const response = await fetch("https://cross-platform.rp.devfactory.com/following");
          const data = await response.json();
          setFollowingState(prevFlashcards => [...prevFlashcards, data]);
        } catch (error) {
          console.error(error);
        }
      };

      var interval = setInterval(fetchData, 1000);
      clearInterval(intervalForYou)
    } else {
      const fetchDataForYou = async () => {
        try {
          const response = await fetch("https://cross-platform.rp.devfactory.com/for_you");
          const data = await response.json();
          setForyouState(prevFlashcards => [...prevFlashcards, data]);
        } catch (error) {
          console.error(error);
        }
      };

      var intervalForYou = setInterval(fetchDataForYou, 1000);
      clearInterval(interval)
    }

    return (() => {
      clearInterval(intervalForYou)
      clearInterval(interval)
    })

  }, [followingOrForyou]);


  const renderItem = ({ item }) => {
    return (
      <RenderFollowing item={item} />
    )
  };

  const renderItemItem = ({ item }) => {
    return (
      <RenderForyou item={item} />
    )
  }

  const handleScroll = event => {
    const offset = event.nativeEvent.contentOffset.y;
    const index = Math.round(offset / windowHeight - 80);
    setActiveIndex(index);
  };


  return (
    <SafeAreaView style={styles.container} >
      <Header setFollowingOrForyou={setFollowingOrForyou} followingOrForyou={followingOrForyou} activeIndex={activeIndex} />
      {
        followingOrForyou ?
          <FlatList
            showsVerticalScrollIndicator={false}
            pagingEnabled
            data={followingState}
            keyExtractor={(data, index) => index.toString()}
            renderItem={renderItem}
            snapToInterval={windowHeight}
            decelerationRate="fast"
            onScrollEndDrag={handleScroll}
            onMomentumScrollEnd={handleScroll}
          />
          :
          <FlatList
            showsVerticalScrollIndicator={false}
            data={foryouState}
            pagingEnabled
            keyExtractor={(data, index) => index.toString()}
            renderItem={renderItemItem}
            snapToInterval={windowHeight}
            decelerationRate="fast"
            onScrollEndDrag={handleScroll}
            onMomentumScrollEnd={handleScroll}
          />
      }

    </SafeAreaView>

  );
};


export default React.memo(HomeScreen);


