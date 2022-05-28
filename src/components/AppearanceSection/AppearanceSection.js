import  './AppearanceSection.scss';

const AppearanceSection = () => {

    return (
        <section
            className="appearance-section"
            data-testid="appearance-section"
        >
            <section className='appearance-section__theme'>
                <h1>Theme</h1>
                <label htmlFor='synthwave-85'>
                    <input 
                        type="radio" 
                        name='choose-theme'
                        id='synthwave-85'
                    ></input>
                    <span>Synthwave 85</span>
                </label>
                <label htmlFor='infinite-ocean'>
                    <input 
                        type="radio" 
                        name='choose-theme'
                        id='infinite-ocean'
                    ></input>
                    <span>Infinite Ocean</span>
                </label >
                <label htmlFor='wild-desert'>
                    <input 
                        type="radio" 
                        name='choose-theme'
                        id='wild-desert'
                    ></input>
                    <span>Wild Desert</span>
                </label>
            </section>
        </section>
    )
}

export default AppearanceSection;