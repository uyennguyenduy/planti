import { StyleSheet } from "react-native"
import { Colors } from "./colorsTheme";
import { FontTheme } from "./fontTheme";
import { Spaces } from "./spacing";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
  },  
  loginForm: {
    alignSelf: 'stretch',
    padding: 20,
    marginHorizontal: 20,
    borderWidth: 4,
    borderColor: Colors.light,
    borderRadius: 5,
    textAlign: 'center',
  },
  loginTitle: {
    color: Colors.light,
    fontSize: 25,
    fontStyle: 'italic'
  },
  loginBody: {
    marginTop: 30,
    marginBottom: 20
  },
  loginInput: {
    borderRadius: 5,
    padding: 8,
    marginVertical: 5,
    backgroundColor: Colors.light,
    color: Colors.primary,
    textAlign: 'center'
  },
  heading: {
    color: Colors.light,
    padding: 10,
    fontSize: FontTheme.heading1,
    fontWeight: 'bold'
  },
  textBody: {
    color: Colors.light,
    fontSize: FontTheme.body
  },
  textWarning: {
    color: Colors.warning,
    fontSize: FontTheme.body
  },
  logo: {
    width: '100%',
    height: '100%'
  },
  loginBtn: {
    padding: 10,
    marginBottom: 15,
    borderRadius: 3,
    backgroundColor: Colors.primary,
  },
  login: {
    fontSize: 20,
    fontWeight: '500',
    color: Colors.light
  }
})