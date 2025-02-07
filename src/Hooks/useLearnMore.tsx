import {useEffect, useState} from "react";

const learnLinks = {
    Linux: [
        {
            "text": "Linux Roadmap",
            "link": "https://roadmap.sh/linux"
        },
        {
            "text": "Linux Journey",
            "link": "https://linuxjourney.com/"
        },
        {
            "text": "Linux Command",
            "link": "https://linuxcommand.org/"
        }
    ],
    DevOps: [
        {
            "text": "DevOps Roadmap",
            "link": "https://roadmap.sh/devops"
        },
        {
            "text": "CNCF",
            "link": "https://www.cncf.io/"
        }
    ],
    Code: [
        {
            "text": "freeCodeCamp",
            "link": "https://www.freecodecamp.org/"
        },
        {
            "text": "LeetCode",
            "link": "https://leetcode.com/"
        }
    ],
    Docker: [
        {
            "text": "Docker Docs",
            "link": "https://docs.docker.com/get-started/"
        },
        {
            "text": "Awesome Docker",
            "link": "https://github.com/veggiemonk/awesome-docker"
        },
        {
            "text": "Docker Roadmap",
            "link": "https://roadmap.sh/docker"
        }
    ],
    SQL: [
        {
            "text": "SQLBolt",
            "link": "https://sqlbolt.com/"
        },
        {
            "text": "Mode SQL",
            "link": "https://mode.com/sql-tutorial"
        },
        {
            "text": "SQL Roadmap",
            "link": "https://roadmap.sh/sql"
        }
    ]
}


const useLearnMore = (category: 'Linux' | 'Code' | 'Docker' | 'DevOps' | 'SQL') => {
    const [links, setLinks] = useState<{ text: string; link: string; }[]>([]);

    useEffect(() => {
        setLinks(learnLinks[category]);
    }, [category]);

    return {
        links
    }
}

export default useLearnMore;