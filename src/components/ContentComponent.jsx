import './css/ContentComponent.css';

function ContentComponent(props){
return (
    <div className="content">
        <div className='content-header'>
            <h2>Content header</h2>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <hr></hr>
        </div>

        <div className="list-header">
            <h2>List header</h2>
                <div className='items'>Iteam1</div>
                <div className='items'>Iteam2</div>
                <div className='items'>Iteam3</div>
                <div className='items'>Iteam4</div>
        </div>       
    </div>
);
}

export default ContentComponent;