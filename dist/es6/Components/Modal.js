'use strict';var _createClass=function(){function defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)descriptor=props[i],descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,'value'in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react=require('react'),_react2=_interopRequireDefault(_react),_Events=require('../Utils/Events'),_Events2=_interopRequireDefault(_Events);Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return call&&('object'==typeof call||'function'==typeof call)?call:self}function _inherits(subClass,superClass){if('function'!=typeof superClass&&null!==superClass)throw new TypeError('Super expression must either be null or a function, not '+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var Modal=function(_React$Component){function Modal(props){_classCallCheck(this,Modal);var _this=_possibleConstructorReturn(this,(Modal.__proto__||Object.getPrototypeOf(Modal)).call(this,props));return _this.handleClose=_this.handleClose.bind(_this),_this}return _inherits(Modal,_React$Component),_createClass(Modal,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(_ref){var open=_ref.open;return!!open==!!this.props.open?void 0:!open||this.props.open?void _Events2.default.remove(this.closeListener):this.closeListener=_Events2.default.onKey('esc',this.handleClose)}},{key:'handleClose',value:function handleClose(){var onClose=this.props.onClose;return onClose&&onClose()}},{key:'diffuseClick',value:function diffuseClick(event){return event.stopPropagation()}},{key:'render',value:function render(){var _props=this.props,open=_props.open,children=_props.children,className=_props.className,_className='Modal '+(open?'Modal-Open':'Modal-Closed')+' '+(className||'');return _react2.default.createElement('div',{className:'Modal-Wrapper'},_react2.default.createElement('div',{className:_className,onClick:this.handleClose},_react2.default.createElement('div',{className:'Modal-Body',onClick:this.diffuseClick},children)))}}]),Modal}(_react2.default.Component);exports.default=Modal;