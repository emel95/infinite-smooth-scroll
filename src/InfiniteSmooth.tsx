import React, { useEffect, useState, useRef, useCallback } from 'react';
import { styles } from './style';
import type { IInfiniteSmooth } from './InfiniteSmooth.type';
import { View, Dimensions, ScrollView } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export const InfiniteSmooth = ({
    data,
    isRight = true,
    time = 100,
    countItemInScreen,
    UiItem,
    speadMove = 40,
    marginHorizontalItems,
}: IInfiniteSmooth) => {
    const [dataInfnit, setDataInfnit] = useState([...data]);
    const [counter, setCounter] = useState<number>(0);
    const sliderRef = useRef<any>(null);
    let timer = useRef<any>(null);
    const handelCounter = useCallback(() => { setCounter(prev => prev + speadMove) }, [counter]);
    const handelAddData = useCallback(() => { setDataInfnit(prev => [...prev, ...data]) }, [dataInfnit]);

    useEffect(() => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
            if (counter <= ((SCREEN_WIDTH / countItemInScreen) + marginHorizontalItems) * dataInfnit.length / 2) {
                handelCounter();
            } else {
                handelAddData();
            }
            sliderRef?.current?.scrollTo({
                x: (SCREEN_WIDTH / 25) + counter,
                animated: true,
            });
        }, time);
        // return () => {
        //   clearTimeout(timer);
        // };
    }, [counter, dataInfnit]);


    return (
        <View style={[styles.main, !isRight ?
            { transform: [{ scaleX: -1 }] } : {}]}>
            <ScrollView
                pagingEnabled={true}
                horizontal={true}
                ref={sliderRef}
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={!isRight ? { transform: [{ scaleX: -1 }] } : {}}
            >
                {dataInfnit.map((item, index: any) => {
                    return (
                        <UiItem item={item} index={index} />
                    )
                })}
            </ScrollView>
        </View>
    );
};

