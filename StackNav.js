import { createStackNavigator } from '@react-navigation/stack';
import MobileScreen from '../screens/MobileScreen';
import Transfer from "../screens/Transfer";
import AEPScreen from "../screens/AEPScreen";
import DthScreen from "../screens/DthScreen";
import AtmScreen from "../screens/AtmScreen";
import PayoutScreen from "../screens/PayoutScreen";
import MoneyScreen from '../screens/MoneyScreen';
import Profile from '../screens/Profile';
import SettingScreen from '../screens/SettingScreen';
import SearchScreen from "../screens/SearchScreen"
import BBPScreen from '../screens/BBPScreen';
import BenefitScreen from '../screens/BenefitScreen';
import Commission from '../screens/Commission';
import LedgerScreen from '../screens/LedgerScreen';
import RefundScreen from '../screens/RefundScreen';
import RequestReport from '../screens/RequestReport';
import RequestScreen from '../screens/RequestScreen';
import UPIScreen from '../screens/UPIScreen';
import BillersList from '../screens/BillersList';
import AddPayout from '../screens/AddPayout';
import AddCommission from '../screens/AddCommission';
import DrawerNav from "../navigation/DrawerNav";
import Login from '../screens/LoginScreen';
import CCPayScreen from '../screens/CCPayScreen';
import SignMobileScreen from '../screens/SignUP/SignMobileScreen';
import OtpScreen from '../screens/SignUP/OtpScreen';
import PanScreen from '../screens/SignUP/PanScreen';
import PanImageScreen from '../screens/SignUP/PanImageScreen';
import AdharScreen from '../screens/SignUP/AdharScreen';
import AdharOtpScreen from '../screens/SignUP/AdharOtpScreen';
import AdharImageScreen from '../screens/SignUP/AdharImageScreen';
import SignupDetails from '../screens/SignUP/SignupDetails';
import SelfiScreen from '../screens/SignUP/SelfiScreen';
import CongratScreen from '../screens/SignUP/CongratScreen';
import ForgetMobileScreen from '../screens/SignUP/ForgetMobile';
import ForgetOtpScreen from '../screens/SignUP/ForgetOtpScreen';
import PasswordScreen from '../screens/SignUP/PasswordScreen';
const Stack = createStackNavigator();
function MyStack() {
     return (
          <Stack.Navigator
               screenOptions={{
                    headerShown: true,
                    headerStyle: {
                         backgroundColor: '#f2612b'
                    },
                    headerTitleStyle: {
                         color: 'white'
                    },
                    headerTitleStyle: {
                         color: 'white'
                    },
                    headerTintColor: 'white',
                    //headerTitle: "Kwic Pay",
               }}
          // initialRouteName="Login"
          >
               <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
               <Stack.Screen name="DrawerNav" component={DrawerNav} options={{ headerShown: false }} />
               {/* <Stack.Screen name="Home" component={Home} /> */}
               <Stack.Screen name="MobileScreen" component={MobileScreen} options={{ headerTitle: "Mobile Recharge" }} />
               <Stack.Screen name="Transfer" component={Transfer} options={{ headerTitle: "DMT" }} />
               <Stack.Screen name="AEPScreen" component={AEPScreen} options={{ headerTitle: "OnBoarding" }} />
               <Stack.Screen name="AtmScreen" component={AtmScreen} options={{ headerTitle: "Micro ATM / M-Pos" }} />
               <Stack.Screen name="MoneyScreen" component={MoneyScreen} />
               <Stack.Screen name="PayoutScreen" component={PayoutScreen} options={{ headerTitle: "Payout Report" }} />
               <Stack.Screen name="DthScreen" component={DthScreen} options={{ headerTitle: "DTH Recharge" }} />
               <Stack.Screen name="Profile" component={Profile} />
               <Stack.Screen name="Setting" component={SettingScreen} />
               <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerTitle: "Search Transaction" }} />
               <Stack.Screen name="BBPScreen" component={BBPScreen} options={{ headerTitle: "BILL PAYMENT" }} />
               <Stack.Screen name="BenefitScreen" component={BenefitScreen} options={{ headerTitle: "Add Beneficiary" }} />
               <Stack.Screen name="Commission" component={Commission} options={{ headerTitle: "Commission Report" }} />
               <Stack.Screen name="LedgerScreen" component={LedgerScreen} options={{ headerTitle: "Ledger Report" }} />
               <Stack.Screen name="RefundScreen" component={RefundScreen} />
               <Stack.Screen name="RequestReport" component={RequestReport} options={{ headerTitle: "MoneyRequest Report" }} />
               <Stack.Screen name="RequestScreen" component={RequestScreen} options={{ headerTitle: "Add Money Request" }} />
               <Stack.Screen name="UPIScreen" component={UPIScreen} options={{ headerTitle: "UPI Collect" }} />
               <Stack.Screen name="BillersList" component={BillersList} options={{ headerTitle: "Billers List" }} />
               <Stack.Screen name="AddPayout" component={AddPayout} options={{ headerTitle: "Add Payout" }} />
               <Stack.Screen name="AddCommission" component={AddCommission} options={{ headerTitle: "Add Commission" }} />
               <Stack.Screen name="CCPayScreen" component={CCPayScreen} options={{ headerTitle: "DMT" }} />
               <Stack.Screen name="SignMobileScreen" component={SignMobileScreen} options={{ headerShown: false }} />
               <Stack.Screen name="OtpScreen" component={OtpScreen} options={{ headerShown: false }} />
               <Stack.Screen name="PanScreen" component={PanScreen} options={{ headerShown: false }} />
               <Stack.Screen name="PanImageScreen" component={PanImageScreen} options={{ headerShown: false }} />
               <Stack.Screen name="AdharScreen" component={AdharScreen} options={{ headerShown: false }} />
               <Stack.Screen name="AdharOtpScreen" component={AdharOtpScreen} options={{ headerShown: false }} />
               <Stack.Screen name="AdharImageScreen" component={AdharImageScreen} options={{ headerShown: false }} />
               <Stack.Screen name="SignupDetails" component={SignupDetails} options={{ headerShown: false }} />
               <Stack.Screen name="SelfiScreen" component={SelfiScreen} options={{ headerShown: false }} />
               <Stack.Screen name="CongratScreen" component={CongratScreen} options={{ headerShown: false }} />
               <Stack.Screen name="ForgetMobileScreen" component={ForgetMobileScreen} options={{ headerShown: false }} />
               <Stack.Screen name="PasswordScreen" component={PasswordScreen} options={{ headerShown: false }} />
               <Stack.Screen name="ForgetOtpScreen" component={ForgetOtpScreen} options={{ headerShown: false }} />

          </Stack.Navigator>
     );
}
export default MyStack;