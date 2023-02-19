import React from "react";

import {
    createStyles,
    Text,
    Container,
    ActionIcon,
    Group,
} from "@mantine/core";

import { BrandTwitter, BrandYoutube, BrandInstagram } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
    footer: {
        paddingTop: theme.spacing.xl * 2,
        paddingBottom: theme.spacing.xl * 2,
        borderTop: `1px solid ${theme.colors.gray[2]}`,
    },

    logo: {
        maxWidth: 200,

        [theme.fn.smallerThan("sm")]: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
    },

    description: {
        marginTop: 5,

        [theme.fn.smallerThan("sm")]: {
            marginTop: theme.spacing.xs,
            textAlign: "center",
        },
    },

    inner: {
        display: "flex",
        justifyContent: "space-between",

        [theme.fn.smallerThan("sm")]: {
            flexDirection: "column",
            alignItems: "center",
        },
    },

    groups: {
        display: "flex",
        flexWrap: "wrap",

        [theme.fn.smallerThan("sm")]: {
            display: "none",
        },
    },

    wrapper: {
        width: 160,
    },

    link: {
        display: "block",
        color: theme.colors.gray[6],
        fontSize: theme.fontSizes.sm,
        paddingTop: 3,
        paddingBottom: 3,

        "&:hover": {
            textDecoration: "underline",
        },
    },

    title: {
        fontSize: theme.fontSizes.lg,
        fontWeight: 700,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        marginBottom: theme.spacing.xs / 2,
        color: theme.black,
    },

    afterFooter: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: theme.spacing.xl,
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
        borderTop: `1px solid ${theme.colors.gray[2]}`,

        [theme.fn.smallerThan("sm")]: {
            flexDirection: "column",
        },
    },

    social: {
        [theme.fn.smallerThan("sm")]: {
            marginTop: theme.spacing.xs,
        },
    },
}));

const data = [
    {
        title: "About",
        links: [
            {
                label: "Features",
                link: "#",
            },
            {
                label: "Pricing",
                link: "#",
            },
            {
                label: "Support",
                link: "#",
            },
            {
                label: "Forums",
                link: "#",
            },
        ],
    },
    {
        title: "Project",
        links: [
            {
                label: "Contribute",
                link: "#",
            },
            {
                label: "Media assets",
                link: "#",
            },
            {
                label: "Changelog",
                link: "#",
            },
            {
                label: "Releases",
                link: "#",
            },
        ],
    },
    {
        title: "Community",
        links: [
            {
                label: "Join Discord",
                link: "#",
            },
            {
                label: "Follow on Twitter",
                link: "#",
            },
            {
                label: "Email newsletter",
                link: "#",
            },
            {
                label: "GitHub discussions",
                link: "#",
            },
        ],
    },
];

export default function Footer() {
    const { classes } = useStyles();

    const groups = data.map((group) => {
        const links = group.links.map((link, index) => (
            <Text
                key={index}
                className={classes.link}
                component="a"
                href={link.link}
                onClick={(e) => e.preventDefault()}
            >
                {link.label}
            </Text>
        ));

        return (
            <div className={classes.wrapper} key={group.title}>
                <Text className={classes.title}>{group.title}</Text>
                {links}
            </div>
        );
    });

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <div className={classes.logo}>
                    <h3>H4ME</h3>
                    <Text
                        size="xs"
                        color="dimmed"
                        className={classes.description}
                    >
                        Search for your forever home
                    </Text>
                </div>
                <div className={classes.groups}>{groups}</div>
            </Container>
            <Container className={classes.afterFooter}>
                <Text color="dimmed" size="sm">
                    © 2022 H4ME. All rights reserved.
                </Text>

                <Group
                    spacing={0}
                    className={classes.social}
                    position="right"
                    noWrap
                >
                    <ActionIcon size="lg">
                        <BrandTwitter size={18} />
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <BrandYoutube size={18} />
                    </ActionIcon>
                    <ActionIcon size="lg">
                        <BrandInstagram size={18} />
                    </ActionIcon>
                </Group>
            </Container>
        </footer>
    );
}
