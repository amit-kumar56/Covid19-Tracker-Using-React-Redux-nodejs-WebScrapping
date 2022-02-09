
import State from '../components/State'
import {connect} from 'react-redux'

const mapStateToProps=state=>({
     data:state.storeItems
})
const mapDispatchToProps=dispatch=>({

})
export default connect(mapStateToProps,mapDispatchToProps)(State)





