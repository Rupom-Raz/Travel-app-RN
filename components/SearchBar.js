import React, { useState } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const onChangeSearch = (query) => setSearch(query);
    return (
        <View>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={search}
            />
        </View>
    );
};

export default SearchBar;
