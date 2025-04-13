import './App.css'
import profile from './assets/profilePhoto.png'
function About() {
    const imgStyle = {
        marginTop: "10px",
        width: '100%',
        maxWidth: '148px',
        height: 'auto',
        borderRadius: '21px',
    };
    return(
        <>
            <div className="tabAutoMargin">
                <p className='fs18 color-gray'>О себе</p>
                <p className='fs36'>Привет! Меня зовут Андрей.
                    Я студент направления дизайна,
                    работаю программистом.
                </p>
                <p className='fs36'>
                    В ближайшие 5 лет планирую более глубоко погрузиться в рабочую сферу для поднятия квалификации,
                    повышения собственных знаний.
                </p>
                <div className='container'>
                    <div className='row'>
                        <div className='col col-sm-6 col-lg-4'>
                            <div style={{
                                backgroundColor: '#F0F0F0',
                                borderRadius: '20px',
                                border: '1px solid #DEDCD9',
                            }}
                                 className='d-flex justify-content-center align-items-center'>
                                <p className='fs18' style={{padding: '10px'}}>
                                    C#, HTML, CSS, JS,
                                    WPF, React, ASP.Net
                                    Full Stack developer
                                </p>
                            </div>
                        </div>
                        <div className='col col-sm-6 col-lg-3'>
                            <img src={profile} alt='profile' style={imgStyle}/>
                        </div>
                        <div className='col col-sm-12 col-lg-5'>
                            <div style={{
                                borderRadius: '20px',
                                border: '1px solid #DEDCD9',
                                maxWidth: '300px'
                            }} className='d-flex justify-content-center align-items-center'>
                                <div>
                                    <p className='fs18 color-gray'>ПОЧТА</p>
                                    <p className='fs21' style={{color: '#642BE4'}}>andrey.turoff@gmail.com</p>
                                    <p className='fs18 color-gray'>МЕСТОНАХОЖДЕНИЕ</p>
                                    <p className='fs21'>Санкт-Петербург, Россия</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;