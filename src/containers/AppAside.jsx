/*
 * @Descripttion:
 * @Author: julius
 * @version:
 * @Date: 2022-04-08 11:18:55
 * @LastEditors: julius
 * @LastEditTime: 2022-04-08 11:53:06
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Icon } from 'antd'
import CustomMenu from '@/components/CustomMenu'

const { Sider } = Layout

const AppAside = props => {
    let { menuToggle, menu } = props
    return (
        <Sider className='aside' collapsed={menuToggle}>
            <div className='logo'>
                <a rel='noopener noreferrer' href='https://github.com/pioneerli' target='_blank'>
                    <Icon type='github' style={{ fontSize: '3.8rem', color: '#fff' }} />
                </a>
            </div>
            <CustomMenu menu={menu}></CustomMenu>
        </Sider>
    )
}

AppAside.propTypes = {
    menuToggle: PropTypes.bool,
    menu: PropTypes.array.isRequired
}

export default AppAside
