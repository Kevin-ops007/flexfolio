import { Button, Title } from '@mantine/core';

export default function Home() {
    return (

        <>
            <Title fz="xl">
                Workout
            </Title >
            <Button radius="xl" size="xl">
                Start Workout
            </Button>
            <Title fz="lg">
                Templates
            </Title >
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