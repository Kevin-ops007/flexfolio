import { Button, Text } from '@mantine/core';

export default function Home() {
    return (

        <>
            <Text fz="xl">
                Workout
            </Text>
            <Button radius="xl" size="xl">
                Start Workout
            </Button>
            <Text fz="lg">
                Templates
            </Text>
            <Button variant="outline" radius="xl" size="xl">
                Push
            </Button>
            <Button variant="outline" radius="xl" size="xl">
                Pull
            </Button>
            <Button variant="outline" radius="xl" size="xl">
                Legs
            </Button>
        </>

    );
}