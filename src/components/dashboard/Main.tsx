import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/store';
import Introduction from './content/Introduction';

const Main = () => {

    const { id } = useSelector((state: AppState) => state.changeView);

    useEffect(() => {
        document.querySelectorAll('.main-content section h2').forEach(el => {
            if(el.textContent!.toLowerCase() === id){
                el.classList.add('main-highlighted')
                
            } else{
                el.classList.remove('main-highlighted')
            }
        })

        document.querySelectorAll('.sidebar section h2').forEach(el => {
            if(el.textContent!.toLowerCase() === id){
                el.classList.add('side-highlighted')
                document.querySelector(`#side-${id}`)!.scrollIntoView()
            } else{
                el.classList.remove('side-highlighted')
            }
        })
    }, [id])

    const hoveringSection = (e: React.MouseEvent<HTMLElement>) => {
        document.querySelectorAll('.main-content section h2').forEach(el => {
            if(el.textContent!.toLowerCase() === e.currentTarget.id){
                el.classList.add('main-highlighted')
                
            } else{
                el.classList.remove('main-highlighted')
            }
        })

        document.querySelectorAll('.sidebar section h2').forEach(el => {
            if(el.textContent!.toLowerCase() === e.currentTarget.id){
                el.classList.add('side-highlighted')
                document.querySelector(`#side-${e.currentTarget.id}`)!.scrollIntoView()
            } else{
                el.classList.remove('side-highlighted')
            }
        })
    }

    const hoverSidebar = (e: React.MouseEvent<HTMLElement>) => {
        document.querySelectorAll('.main-content section h2').forEach(el => {
            if(e.currentTarget.id.includes(el.textContent!.toLowerCase())){
                el.classList.add('main-highlighted')
                
            } else{
                el.classList.remove('main-highlighted')
            }
        })

        document.querySelectorAll('.sidebar section h2').forEach(el => {
            if(e.currentTarget.id.includes(el.textContent!.toLowerCase())){
                el.classList.add('side-highlighted')
                document.querySelector(`#${el.textContent!.toLowerCase()}`)!.scrollIntoView()
            } else{
                el.classList.remove('side-highlighted')
            }
        })
    }

    return(
        <div className="main">
            <div className="sidebar">
                <section id="side-introduction" onMouseEnter={hoverSidebar}>
                    <h2>Introduction</h2>
                    <p>Section Item 1.1</p>
                    <p>Section Item 1.2</p>
                    <p>Section Item 1.3</p>
                </section>
                <section id="side-installation" onMouseEnter={hoverSidebar}>
                    <h2>Installation</h2>
                    <p>Section Item 2.1</p>
                    <p>Section Item 2.2</p>
                    <p>Section Item 2.3</p>
                </section>
                <section id="side-architecture" onMouseEnter={hoverSidebar}>
                    <h2>Architecture</h2>
                    <p>Section Item 3.1</p>
                    <p>Section Item 3.2</p>
                    <p>Section Item 3.3</p>
                </section>
                <section id="side-apis" onMouseEnter={hoverSidebar}>
                    <h2>APIs</h2>
                    <p>Section Item 4.1</p>
                    <p>Section Item 4.2</p>
                    <p>Section Item 4.3</p>
                </section>
                <section id="side-bugs" onMouseEnter={hoverSidebar}>
                    <h2>Bugs</h2>
                    <p>Section Item 5.1</p>
                    <p>Section Item 5.2</p>
                    <p>Section Item 5.3</p>
                </section>
                <section id="side-resources" onMouseEnter={hoverSidebar}>
                    <h2>Resources</h2>
                    <p>Section Item 5.1</p>
                    <p>Section Item 5.2</p>
                    <p>Section Item 5.3</p>
                </section>
                <div className="break"></div>
            </div>
            <div className="main-content">
                <header className="project-title">
                    <h1>My Dashboard Documenation</h1>
                </header>
                <section id="introduction" onMouseEnter={hoveringSection}>
                    <Introduction/>
                </section>
                <section id="installation" onMouseEnter={hoveringSection}>
                    <h2>Installation</h2>
                    <p>INSERT INFO</p>
                </section>
                <section id="architecture" onMouseEnter={hoveringSection}>
                    <h2>Architecture</h2>
                    <p>INSERT INFO</p>
                </section>
                <section id="apis" onMouseEnter={hoveringSection}>
                    <h2>APIs</h2>
                    <p>INSERT INFO</p>
                </section>
                <section id="bugs" onMouseEnter={hoveringSection}>
                    <h2>Bugs</h2>
                    <p>INSERT INFO</p>
                </section>
                <section id="resources" onMouseEnter={hoveringSection}>
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