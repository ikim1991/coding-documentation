import React, { useEffect } from 'react';
import { AppState } from '../../store/store';
import APIs from './content/APIs';
import Architecture from './content/Architecture';
import Installation from './content/Installation';
import Introduction from './content/Introduction';
import Bugs from './content/Bugs';
import { useDispatch, useSelector } from 'react-redux';
import Resources from './content/Resources';
import { changeIndex } from '../../store/actions/ChangeViewActions';

const Main = () => {

    const { id } = useSelector((state: AppState) => state.changeView);
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(changeIndex(0));
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
                document.querySelector(`#side-${id}`)!.scrollIntoView({behavior: 'smooth', block: 'start'})
            } else{
                el.classList.remove('side-highlighted')
            }
        })

        const sectionArray = Array.from(document.querySelectorAll('.main-content section'))
        let scroll = 0

        setTimeout(() => {
            for (let element of sectionArray){
                if(element.id === id){
                    break
                } else{
                    scroll += element.scrollHeight
                }
            }

            document.querySelector('.main-content')!.scrollBy({
                top: scroll,
                behavior: 'smooth'
            })
        }, 500)
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
                document.querySelector(`#side-${e.currentTarget.id}`)!.scrollIntoView({behavior: 'smooth', block: 'start'})
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
                document.querySelector(`#${el.textContent!.toLowerCase()}`)!.scrollIntoView({behavior: 'smooth', block: 'start'})
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
                    <p>Project Summary</p>
                    <p>Images</p>
                </section>
                <section id="side-installation" onMouseEnter={hoverSidebar}>
                    <h2>Installation</h2>
                    <p>Getting Started</p>
                    <p>Server Side</p>
                    <p>Client Side</p>
                </section>
                <section id="side-architecture" onMouseEnter={hoverSidebar}>
                    <h2>Architecture</h2>
                    <p>Application Architecture</p>
                    <p>Application Pipeline</p>
                </section>
                <section id="side-apis" onMouseEnter={hoverSidebar}>
                    <h2>APIs</h2>
                    <p>REST APIs</p>
                    <p>WebSockets</p>
                    <p>Database Service</p>
                </section>
                <section id="side-bugs" onMouseEnter={hoverSidebar}>
                    <h2>Bugs</h2>
                    <p>Testing</p>
                    <p>Errors & Bugs</p>
                    <p>Missing Functionality</p>
                </section>
                <section id="side-resources" onMouseEnter={hoverSidebar}>
                    <h2>Resources</h2>
                    <p>Client Side</p>
                    <p>Server Side</p>
                    <p>License</p>
                </section>
                <div className="break"></div>
            </div>
            <div className="main-content">
                <header className="project-title">
                    <h1>Online Chess Documenation</h1>
                </header>
                <section id="introduction" onMouseEnter={hoveringSection}>
                    <h2>Introduction</h2>
                    <Introduction/>
                </section>
                <section id="installation" onMouseEnter={hoveringSection}>
                    <h2>Installation</h2>
                    <Installation/>
                </section>
                <section id="architecture" onMouseEnter={hoveringSection}>
                    <h2>Architecture</h2>
                    <Architecture/>
                </section>
                <section id="apis" onMouseEnter={hoveringSection}>
                    <h2>APIs</h2>
                    <APIs/>
                </section>
                <section id="bugs" onMouseEnter={hoveringSection}>
                    <h2>Bugs</h2>
                    <Bugs/>
                </section>
                <section id="resources" onMouseEnter={hoveringSection}>
                    <h2>Resources</h2>
                    <Resources/>
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