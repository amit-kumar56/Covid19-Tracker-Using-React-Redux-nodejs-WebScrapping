
import Tracker from '../components/Tracker'
import {connect} from 'react-redux'
import {goToAction} from '../service/actions/actions'

const mapStateToProps=state=>({
     data:state.storeItems
})
const mapDispatchToProps=dispatch=>({
    addToRedux:data=>dispatch(goToAction(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Tracker)





