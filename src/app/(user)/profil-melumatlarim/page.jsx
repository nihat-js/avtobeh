"use client"

import styled from 'styled-components';
import { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useAuth } from '@/src/lib/AuthContext';

const UserProfile = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState({
    name: "Sarah Johnson",
    email: "sarah.j@gmail.com",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    joinDate: "March 15, 2023",
    postsCount: 127,
    balance: 1250.50,
    loginProvider: "Google",
    favoriteBrands: ["Nike", "Apple", "Samsung"],
    membershipLevel: "Gold",
    accountStatus: "Active",
    recentTransactions: [
      { date: "2024-03-15", amount: 150.00, type: "Credit", description: "Refund" },
      { date: "2024-03-10", amount: -80.50, type: "Debit", description: "Purchase" },
      { date: "2024-03-05", amount: -45.00, type: "Debit", description: "Service Fee" },
    ]
  });

  return (
    <ProfileContainer>
      <TopGrid>
        <ProfileCard>
          <AvatarSection>
            <Avatar src={userData.avatar} alt="Profile picture" />
            <ButtonGroup>
              <ChangeAvatarButton>
                <FaEdit /> Change Picture
              </ChangeAvatarButton>
              <RemoveAvatarButton>
                <FaTrash /> Remove
              </RemoveAvatarButton>
            </ButtonGroup>
          </AvatarSection>
          
          <UserInfo>
            <NameSection>
              <h1>{user.name}</h1>
              <EditButton><FaEdit /></EditButton>
            </NameSection>
            <Status>{userData.accountStatus} • {userData.membershipLevel} Member</Status>
            <AccountBadge>{userData.loginProvider}</AccountBadge>
          </UserInfo>
        </ProfileCard>

        <StatsCard>
          <SectionTitle>Quick Overview</SectionTitle>
          <StatsGrid>
            <StatItem>
              <StatValue>{userData.postsCount}</StatValue>
              <StatLabel>Total Posts</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>${userData.balance.toFixed(2)}</StatValue>
              <StatLabel>Balance</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>{userData.membershipLevel}</StatValue>
              <StatLabel>Level</StatLabel>
            </StatItem>
            <StatItem>
              <StatValue>{userData.favoriteBrands.length}</StatValue>
              <StatLabel>Favorites</StatLabel>
            </StatItem>
          </StatsGrid>
        </StatsCard>
      </TopGrid>

      <ContentGrid>
        <Section>
          <SectionTitle>Account Details</SectionTitle>
          <DetailItem>
            <Label>Email:</Label>
            <ValueGroup>
              <Value>{user.email}</Value>
              <EditButton><FaEdit /></EditButton>
            </ValueGroup>
          </DetailItem>
          <DetailItem>
            <Label>Member Since:</Label>
            <Value>{userData.joinDate}</Value>
          </DetailItem>
        </Section>

        <Section>
          <SectionTitle>Activity Overview</SectionTitle>
          <DetailItem>
            <Label>Total Posts:</Label>
            <Value>{userData.postsCount}</Value>
          </DetailItem>
          <DetailItem>
            <Label>Account Balance:</Label>
            <Value>${userData.balance.toFixed(2)}</Value>
          </DetailItem>
        </Section>

        <Section>
          <SectionTitle>Change Password</SectionTitle>
          <PasswordForm>
            <Input type="password" placeholder="Current Password" />
            <Input type="password" placeholder="New Password" />
            <Input type="password" placeholder="Confirm New Password" />
            <ChangePasswordButton>Update Password</ChangePasswordButton>
          </PasswordForm>
        </Section>
      </ContentGrid>

      <FullWidthSection>
        <SectionTitle>Recent Transactions</SectionTitle>
        <TransactionsList>
          {userData.recentTransactions.map((transaction, index) => (
            <TransactionItem key={index} type={transaction.type}>
              <TransactionDate>{transaction.date}</TransactionDate>
              <TransactionDesc>{transaction.description}</TransactionDesc>
              <TransactionAmount type={transaction.type}>
                {transaction.type === "Credit" ? "+" : "-"}${Math.abs(transaction.amount).toFixed(2)}
              </TransactionAmount>
            </TransactionItem>
          ))}
        </TransactionsList>
      </FullWidthSection>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;
`;

const TopGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const ProfileCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const StatsCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 1rem;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
  background: ${props => props.theme.colors?.background || '#f8f9fa'};
  border-radius: 8px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2196F3;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: #666;
  font-weight: 500;
`;

const AvatarSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    margin: 0;
    color: #333;
    font-size: 2rem;
  }
`;

const Status = styled.span`
  color: #666;
  font-size: 1.1rem;
  margin-top: 0.5rem;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const Section = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const SectionTitle = styled.h2`
  color: #333;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #f0f0f0;
`;

const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.5rem 0;
  
  &:hover {
    background: #f8f9fa;
    border-radius: 6px;
    padding: 0.5rem;
    margin: 0 -0.5rem 1rem -0.5rem;
  }
`;

const Label = styled.span`
  color: #666;
  font-weight: 500;
`;

const Value = styled.span`
  color: #333;
  font-weight: 600;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-1px);
  }
`;

const ChangeAvatarButton = styled(Button)`
  background: #f0f0f0;
  color: #333;
  
  &:hover {
    background: #e0e0e0;
  }
`;

const ChangePasswordButton = styled(Button)`
  background: #4CAF50;
  color: white;
  width: 100%;
  margin-top: 1rem;
  
  &:hover {
    background: #388E3C;
  }
`;

const BrandsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const BrandItem = styled.span`
  background: #f0f0f0;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  color: #333;
`;

const AccountBadge = styled.span`
  background: #4CAF50;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  align-self: flex-start;
`;

const PasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const FullWidthSection = styled(Section)`
  grid-column: 1 / -1;
  margin-top: 2rem;
`;

const TransactionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TransactionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: ${props => props.type === 'Credit' ? '#f0f7f0' : '#fff'};
  border-radius: 8px;
  border: 1px solid #eee;
`;

const TransactionDate = styled.span`
  color: #666;
  font-size: 0.9rem;
`;

const TransactionDesc = styled.span`
  color: #333;
  font-weight: 500;
`;

const TransactionAmount = styled.span`
  font-weight: 600;
  color: ${props => props.type === 'Credit' ? '#4CAF50' : '#f44336'};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const RemoveAvatarButton = styled(Button)`
  background: #dc3545;
  color: white;
  
  &:hover {
    background: #c82333;
  }
`;

const EditButton = styled.button`
  background: none;
  border: none;
  color: #6c757d;
  cursor: pointer;
  padding: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  
  &:hover {
    color: #007bff;
    background: #f8f9fa;
  }
`;

const NameSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  h1 {
    margin: 0;
  }
`;

const ValueGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export default UserProfile;