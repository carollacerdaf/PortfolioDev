import { FoodCard } from "@components/FoodCard";
import { Container, DayOfTheWeek } from "./styles";
import { FlatList } from "react-native";
import { useState } from "react";

export function FoodList() {

    const foods = [
        {
            food: "David",
            time: "ax3",
        },
        {
            food: "David",
            time: "ax3",
        },
        {
            food: "David",
            time: "ax3",
        },
        {
            food: "David",
            time: "ax3",
        },
        {
            food: "David",
            time: "ax3",
        },
        {
            food: "David",
            time: "ax3",
        },
        {
            food: "David",
            time: "ax3",
        },
        {
            food: "David",
            time: "ax3",
        },
        {
            food: "David",
            time: "ax3",
        },
        {
            food: "David",
            time: "ax3",
        },
        {
            food: "David",
            time: "ax3",
        },
        {
            food: "David",
            time: "ax3",
        },
    ];

    return (
        <Container>
            <DayOfTheWeek>12.08.22</DayOfTheWeek>
            <FlatList
                data={foods}
                keyExtractor={(item) => item.time}
                renderItem={({ item }) =>
                    <FoodCard
                        time={item.time}
                        food={item.food}
                    />}
            />
        </Container>
    );
}