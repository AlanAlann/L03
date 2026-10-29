import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Movie from './components/Movie';


class AllMovies extends React.Component {
    render() {
        return(
            <ScrollView>
            <View>
                <Movie title={"Doctor Sleep"} year={2019} icon_name={"skull"} icon_color={"grey"}
                poster={require("./img/doctor-sleep.jpg")}/>
                <Movie title={"Midway"} year={2020} icon_name={"person-rifle"} icon_color={"green"} poster={require("./img/midway.jpg")}/>
                <Movie title={"Jailer 2"} year={2026} icon_name={"award"} icon_color={"pink"}
                       poster={{uri: "https://tse4.mm.bing.net/th/id/OIF.IzdWtDprFkCWOI0RLAwrwg?r=0&pid=Api&h=220&P=0"}}/>


            </View>
            </ScrollView>
        );
    };
};

export default AllMovies;

