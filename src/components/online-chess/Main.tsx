import React, { useEffect, useState } from 'react';

const Main = () => {

    const [sidebarScroll, setSidebarScroll] = useState(0);

    const highlightText = (hash: string) => {

       document.querySelectorAll('.sidebar section h2').forEach(el => {
           el.classList.remove('side-highlighted')
       })

       document.querySelectorAll('.main-content section h2').forEach(el => {
           el.classList.remove('main-highlighted')
       })

       let selector = `#${hash.split('-')[1]}`

        switch(hash){
            case '#side-introduction':
                (document.querySelector(hash)!.firstChild as HTMLElement).classList.add('side-highlighted');
                (document.querySelector(selector)!.firstChild as HTMLElement).classList.add('main-highlighted');
                break;
            case '#side-installation':
                (document.querySelector(hash)!.firstChild as HTMLElement).classList.add('side-highlighted');
                (document.querySelector(selector)!.firstChild as HTMLElement).classList.add('main-highlighted');
                break;
            case '#side-architecture':
                (document.querySelector(hash)!.firstChild as HTMLElement).classList.add('side-highlighted');
                (document.querySelector(selector)!.firstChild as HTMLElement).classList.add('main-highlighted');
                break;
            case '#side-apis':
                (document.querySelector(hash)!.firstChild as HTMLElement).classList.add('side-highlighted');
                (document.querySelector(selector)!.firstChild as HTMLElement).classList.add('main-highlighted');
                break;
            case '#side-deployment':
                (document.querySelector(hash)!.firstChild as HTMLElement).classList.add('side-highlighted');
                (document.querySelector(selector)!.firstChild as HTMLElement).classList.add('main-highlighted');
                break;
            case '#side-resources':
                (document.querySelector(hash)!.firstChild as HTMLElement).classList.add('side-highlighted');
                (document.querySelector(selector)!.firstChild as HTMLElement).classList.add('main-highlighted');
                break;
            default:
                break;
        }
    }

    const onSidebarScroll = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log("sidebar")
    }

    const onMainScroll = (e: React.MouseEvent<HTMLDivElement>) => {
 
        if(e.currentTarget.scrollTop < document.getElementById("introduction")!.offsetHeight){
            document.location.hash = "#side-introduction"
            highlightText(document.location.hash)
        } else if(
            e.currentTarget.scrollTop < document.getElementById("introduction")!.offsetHeight + document.getElementById("installation")!.offsetHeight
        ){
            document.location.hash = "#side-installation"
            highlightText(document.location.hash)
        } else if(
            e.currentTarget.scrollTop < document.getElementById("introduction")!.offsetHeight + document.getElementById("installation")!.offsetHeight + document.getElementById("architecture")!.offsetHeight
        ){
            document.location.hash = "#side-architecture"
            highlightText(document.location.hash)
        } else if(
            e.currentTarget.scrollTop < document.getElementById("introduction")!.offsetHeight + document.getElementById("installation")!.offsetHeight + document.getElementById("architecture")!.offsetHeight + document.getElementById("apis")!.offsetHeight
        ){
            document.location.hash = "#side-apis"
            highlightText(document.location.hash)
        } else if(
            e.currentTarget.scrollTop < document.getElementById("introduction")!.offsetHeight + document.getElementById("installation")!.offsetHeight + document.getElementById("architecture")!.offsetHeight + document.getElementById("apis")!.offsetHeight + document.getElementById("deployment")!.offsetHeight
        ){
            document.location.hash = "#side-deployment"
            highlightText(document.location.hash)
        } else if(
            e.currentTarget.scrollTop < document.getElementById("introduction")!.offsetHeight + document.getElementById("installation")!.offsetHeight + document.getElementById("architecture")!.offsetHeight + document.getElementById("apis")!.offsetHeight + document.getElementById("deployment")!.offsetHeight + document.getElementById("resources")!.offsetHeight
        ){
            document.location.hash = "#side-resources"
            highlightText(document.location.hash)
        }
    }

    return(
        <div className="main">
            <div className="sidebar" onScroll={onSidebarScroll}>
                <section id="side-introduction">
                    <h2>Introduction</h2>
                    <p>Section Item 1.1</p>
                    <p>Section Item 1.2</p>
                    <p>Section Item 1.3</p>
                </section>
                <section id="side-installation">
                    <h2>Installation</h2>
                    <p>Section Item 2.1</p>
                    <p>Section Item 2.2</p>
                    <p>Section Item 2.3</p>
                </section>
                <section id="side-architecture">
                    <h2>Architecture</h2>
                    <p>Section Item 3.1</p>
                    <p>Section Item 3.2</p>
                    <p>Section Item 3.3</p>
                </section>
                <section id="side-apis">
                    <h2>APIs</h2>
                    <p>Section Item 4.1</p>
                    <p>Section Item 4.2</p>
                    <p>Section Item 4.3</p>
                </section>
                <section id="side-deployment">
                    <h2>Deployment</h2>
                    <p>Section Item 5.1</p>
                    <p>Section Item 5.2</p>
                    <p>Section Item 5.3</p>
                </section>
                <section id="side-resources">
                    <h2>Resources</h2>
                    <p>Section Item 5.1</p>
                    <p>Section Item 5.2</p>
                    <p>Section Item 5.3</p>
                </section>
                <div className="break"></div>
            </div>
            <div className="main-content" onScroll={onMainScroll}>
                <header className="project-title">
                    <h1>Online Chess Documenation</h1>
                </header>
                <section id="introduction">
                    <h2>Introduction</h2>
                    <p>INSERT INFO</p>
                    <h2>Introduction</h2>
                    <p>Section Item 1.1</p>
                    <p>Section Item 1.2</p>
                    <p>Section Item 1.3</p>
                    <h2>Introduction</h2>
                    <p>Section Item 1.1</p>
                    <p>Section Item 1.2</p>
                    <p>Section Item 1.3</p>
                </section>
                <section id="installation">
                    <h2>Installation</h2>
                    <p>INSERT INFO</p>
                    <h2>Introduction</h2>
                    <p>Section Item 1.1</p>
                    <p>Section Item 1.2</p>
                    <p>Section Item 1.3</p>
                    <h2>Introduction</h2>
                    <p>Section Item 1.1</p>
                    <p>Section Item 1.2</p>
                    <p>Section Item 1.3</p>
                </section>
                <section id="architecture">
                    <h2>Architecture</h2>
                    <p>INSERT INFO</p>
                    <h2>Introduction</h2>
                    <p>Section Item 1.1</p>
                    <p>Section Item 1.2</p>
                    <p>Section Item 1.3</p>
                    <h2>Introduction</h2>
                    <p>Section Item 1.1</p>
                    <p>Section Item 1.2</p>
                    <p>Section Item 1.3</p>
                </section>
                <section id="apis">
                    <h2>APIs</h2>
                    <p>INSERT INFO</p>
                    <h2>Introduction</h2>
                    <p>Section Item 1.1</p>
                    <p>Section Item 1.2</p>
                    <p>Section Item 1.3</p>
                    <h2>Introduction</h2>
                    <p>Section Item 1.1</p>
                    <p>Section Item 1.2</p>
                    <p>Section Item 1.3</p>
                </section>
                <section id="deployment">
                    <h2>Deployment</h2>
                    <p>INSERT INFO</p>
                    <h2>Introduction</h2>
                    <p>Section Item 1.1</p>
                    <p>Section Item 1.2</p>
                    <p>Section Item 1.3</p>
                    <h2>Introduction</h2>
                    <p>Section Item 1.1</p>
                    <p>Section Item 1.2</p>
                    <p>Section Item 1.3</p>
                </section>
                <section id="resources">
                    <h2>Resources</h2>
                    <p>INSERT INFO</p>

                </section>
                <footer>
                    <div>
                        <h3>© 2020 Chris Kim</h3>
                        <div className="footer-links">
                            <a href="https://github.io/ikim1991/portfolio/" target="_blank"><i className="fa fa-globe"></i></a>
                            <a href="https://github.com/ikim1991/" target="_blank"><i className="fa fa-github"></i></a>
                            <a href="https://linkedin.com/in/ikim91/" target="_blank"><i className="fa fa-linkedin-square"></i></a>
                            <a href="https://instagram.com/ikim91/" target="_blank"><i className="fa fa-instagram"></i></a>
                        </div>
                    </div>
                    
                </footer>
            </div>
        </div>
    )
}

export default Main;