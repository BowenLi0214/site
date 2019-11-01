import { genius } from "./world";
import { all } from "./family";

const MyLife = () => {
    let me = genius.create();
    me.name = {
        firstName: "Bowen",
        lastName: "Li"
    };
    me.childhood = {
        happiness: all.love
    };
    me.university = "Dalhousie University";
    me.carrer = {
        title: "Developer",
        company: [
            {
                name: "Right Source Group Limited",
                start: new Date("2017/11/02"),
                to: new Date("2019/01/02"),
                title: "Full Stack Developer"
            },
            {
                name: "Mindsea Developement Inc.",
                start: new Date("2019/01/02"),
                to: null,
                title: "Web Developer"
            }
        ],
        start: new Date("2017/11/02"),
        to: null
    };
    me.business = [
        { name: "Zmley Tech", foundedIn: 2017 },
        { name: "Zmley Inc", foundedIn: 2018 }
    ];
};

MyLife.run();
